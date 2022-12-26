const Restaurants = require('../model/Restaurants')

module.exports = {
  getRestaurants: async (req, res) => {
    try {
      const results = await Restaurants.get(req, res)
      return res.status(200).send(results)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)

    }
  },
  getRestaurantsById: async (req, res) => {
    try {
      const results = await Restaurants.getById(req, res)
      return res.status(200).send(results)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  addRestaurants: async (req, res) => {
    console.log(req.file, "xixixi")
    console.log(req.body, "hehey")
    try {
      const reqModifer = {
        ...req,
        body: { ...req.body, restaurants_image: req.file.filename }
      }
      const results = await Restaurants.add(reqModifer, res)
      return res.status(201).send(results)
    } catch (error) {
      console.log(error)
      return res.status(400).send(error)
    }
  },
  updateRestaurants: async (req, res) => {
    try {
      let reqModifier = {
        ...req,
      }
      if (req.file) {
        reqModifier = {
          ...req,
          body: { ...req.body, restaurants_image: req.file.filename },
        }
      }
      const results = await Restaurants.update(reqModifier, res)
      return res.status(201).send(results)
    } catch (error) {
      return res.status(400).send(error)
    }
  },
  deleteRestaurants: async (req, res) => {
    try {
      const results = await Restaurants.remove(req, res)
      return res.status(201).send(results)
    } catch (error) {
      console.log(error, "error delete controller")
      return res.status(400).send(error)
    }
  }
}