const express = require("express");
const app = express()
const authRoutes = require('./authRoutes')
const restaurantsRoutes = require('./restaurantsRoutes')



app.use('/restaurants', restaurantsRoutes)
app.use('/auth', authRoutes)




module.exports = app