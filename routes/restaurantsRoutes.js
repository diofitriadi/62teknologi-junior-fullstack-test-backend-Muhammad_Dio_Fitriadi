const express = require("express")
const { getRestaurants, getRestaurantsById, addRestaurants, updateRestaurants, deleteRestaurants } = require('../controller/restaurantsController')
const router = express.Router()
const verifyAuth = require("../helper/verifyAuth")
const upload = require('../helper/multer')


router.get('/', getRestaurants)
router.get('/:id', getRestaurantsById)
router.post('/', verifyAuth, upload, addRestaurants)
router.patch('/:id', verifyAuth, upload, updateRestaurants)
router.delete('/:id', verifyAuth, deleteRestaurants)



module.exports = router