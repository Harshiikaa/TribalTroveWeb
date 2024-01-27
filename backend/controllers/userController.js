const Users = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cloudinary = require('cloudinary')
const nodemailer = require("nodemailer")

const keysecret = process.env.JWT_TOKEN_SECRET

// email config

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})



const createUser = async (req, res) => {
    console.log(req.body)
    const { firstName, lastName, phoneNumber, email, password } = req.body
    if (!firstName || !lastName || !phoneNumber || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        })
    }
    try {
        const existingUser = await Users.findOne({ email: email })
        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists."
            })
        }
        const generatedSalt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, generatedSalt)
        const newUser = new Users({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: encryptedPassword
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message: "User created succesfully."
        })
    } catch (error) {
        res.status(500).json("Server error")
    }
}

const loginUser = async (req, res) => {
    // res.send("Welcome to Login User API");
    // step1 :check if data is coming or not
    console.log(req.body);
    // step 2: Destructure the data 
    const { email, password } = req.body;
    // step3 : validate the incoming data
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        })
    }
    // step 4: try catch block
    try {
        // step 5: find user
        const user = await Users.findOne({ email: email }) // user store all data of the user
        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist"
            })
        }
        // step 6: check password
        const passwordToCompare = user.password;
        const isMatch = await bcrypt.compare(password, passwordToCompare)
        if (!isMatch) {
            return res.json({
                success: false,
                message: "Password does not match"
            })
        }
        // step 7: create token 
        const token = await jwt.sign(
            {
                id: user._id,
                //  isSeller: user.isSeller,
                isAdmin: user.isAdmin
            },
            process.env.JWT_TOKEN_SECRET,
        )
        // step 8: send response
        res.status(200).json({
            success: true,
            token: token,
            userData: user,
            message: "User logged in successfully",

        })
    } catch (error) {
        console.log(error),
            res.json("Server error")
    }


}

// function to get all users
const getAllUsers = async (req, res) => {
    try {
        const listOfUsers = await Users.find();
        res.json({
            success: true,
            message: "Users fetched succesfully",
            users: listOfUsers
        })

    } catch (error) {
        console.log(error)
        res.status(500).json("Server Error")

    }
}

// function to get single user
const getSingleUser = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.json({
            success: false,
            message: "User id is required!"
        })
    }
    try {
        const singleUser = await Users.findById(id);
        res.json({
            success: true,
            message: "Users fetched successfully",
            user: singleUser

        })

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")

    }
}
const updateUser = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
    } = req.body;
    const { userImage } = req.files;


    const id = req.params.id;
    if (!firstName
        || !lastName
        || !phoneNumber
        || !email
        || !password) {
        res.json({
            success: true,
            message: "All fields are required!"
        })
    }
    try {
        if (userImage) {
            const uploadedImage = await cloudinary.v2.uploader.upload(
                userImage.path,
                {
                    folder: "users",
                    crop: "scale"
                }
            )
            const updatedUser = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                password: password,
                userImageURL: uploadedImage.secure_url
            }
            await Users.findByIdAndUpdate(id, updateUser);
            res.json({
                success: true,
                message: "User updated successfully",
                user: updatedUser
            })
        }
        else {
            const updatedUser = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                password: password,
            }
            await Users.findByIdAndUpdate(id, updatedUser);
            res.json({
                success: true,
                message: "User updated successfully without image",
                user: updatedUser
            })

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}


const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.json({
                success: false,
                message: "User not found!"
            })
        }
        res.json({
            success: true,
            message: "User deleted successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }

}

const sendPasswordLink = async (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }
    try {
        const userfind = await Users.findOne({ email: email });

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "120s"
        });

        const setusertoken = await Users.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });


        if (setusertoken) {
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Sending Email For password Reset",
                text: `This Link Valid For 2 MINUTES http://localhost:3000/resetPassword/${userfind.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })

        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }

}



// verify user for forgot password time
const resetPassword = async (req, res) => {
    const { id, token } = req.params;

    try {
        const validuser = await Users.findOne({ _id: id, verifytoken: token });

        const verifyToken = jwt.verify(token, keysecret);

        console.log(verifyToken)

        if (validuser && verifyToken._id) {
            res.status(201).json({ status: 201, validuser })
        } else {
            res.status(401).json({ status: 401, message: "user does not exist" })
        }

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
};

// change password
const changePassword = async(req,res)=>{
    const {id,token} = req.params;

    const {password} = req.body;

    try {
        const validuser = await Users.findOne({_id:id,verifytoken:token});
        
        const verifyToken = jwt.verify(token,keysecret);

        if(validuser && verifyToken._id){
            const newpassword = await bcrypt.hash(password,12);

            const setnewuserpass = await Users.findByIdAndUpdate({_id:id},{password:newpassword});

            setnewuserpass.save();
            res.status(201).json({status:201,setnewuserpass})

        }else{
            res.status(401).json({status:401,message:"User does not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401,error})
    }
}



module.exports = { createUser, loginUser, getAllUsers, getSingleUser, updateUser, deleteUser, sendPasswordLink , resetPassword, changePassword};