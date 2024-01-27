const router = require('express').Router()
const productsController = require("../controllers/productsController");
const { authGuardSeller } = require('../middleware/authGaurd');



// create product API
// get route for login and register
router.post('/createProduct', authGuardSeller, productsController.createProduct)
router.get('/getProducts', productsController.getAllProducts)
router.get("/getProduct/:id", productsController.getSingleProduct)
router.put("/updateProduct/:id",authGuardSeller, productsController.updateProduct)
router.delete("/deleteProduct/:id", authGuardSeller, productsController.deleteProduct)


module.exports = router;