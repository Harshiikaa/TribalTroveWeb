const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
    // get header authorization
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.json({
            success: false,
            message: "Authorization header not found!"
        })
    }
    // get token by spliting the header
    // Format = 'Bearer tokenxyfghjhgfdfghg'
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.json({
            success: false,
            message: "Token not found!"
        })
    }

    try {
        // verify token
        const decodeUser = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        req.user = decodeUser;
        next();

    } catch (error) {
        res.json({
            success: false,
            message: "Invalid Token"
        })
    }


}


const authGuardSeller = (req, res, next) => {

    // get header authorization
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.json({
            success: false,
            message: "Authorization header not found!"
        })
    }

    // get token by spliting the header
    // Format = 'Bearer tokenxyfghjhgfdfghg'
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.json({
            success: false,
            message: "Token not found!"
        })
    }

    try {
        // console.log(token);

        // // verify token
        // const decodeSeller = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        // console.log(decodeSeller)
        // req.user = decodeSeller;
        // if(!req.user.isSeller){
        //     return res.json({
        //         success: false,
        //         message: "Permission denied!"
        //     })
        // }

        // check if user is seller or not

        // verify token
        const decodeSeller = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        req.seller = decodeSeller;

        next();

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Invalid Token"
        })
    }


}

module.exports = {
    authGuard,
    authGuardSeller
};