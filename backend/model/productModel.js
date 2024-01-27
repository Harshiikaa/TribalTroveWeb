const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,

    },
    productDescription: {
        type: String,
        required: true,
    },
    productImageURL: {
        type: String,
        required: true,
        trim: true,
    }
    
})

const Products = mongoose.model('products', productSchema);
module.exports = Products;