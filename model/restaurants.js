const db = require('../helper/db_connection')
const fs = require('fs')

module.exports = {
  get: (req, res) => {
    return new Promise((resolve, reject) => {
      const { restaurants_name = '', restaurants_categories = '', restaurants_location = '', restaurants_rating = '', order = 'restaurants_name' } = req.query
      const { limit, page, sortBy = 'ASC' } = req.query
      const offset = (page - 1) * limit
      db.query(`SELECT restaurants_id, restaurants_name, restaurants_categories, restaurants_image, restaurants_location, restaurants_rating, restaurants_desc FROM restaurants WHERE restaurants_name LIKE '%${restaurants_name}%' AND restaurants_categories LIKE '%${restaurants_categories}%' AND restaurants_location LIKE '%${restaurants_location}%' ORDER BY ${order} ${sortBy} ${page && limit ? `LIMIT ${limit} OFFSET ${offset}` : ''}`, (err, result) => {
        if (err) {
          reject(console.log(err, "eerrrrorrr"))
        }
        resolve({
          status: 200,
          message: 'Success',
          data: result
        })
      })
    })
  },
  getById: (req, res) => {
    const { id } = req.params
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM restaurants WHERE restaurants_id='${id}'`, (err, results) => {
        if (err) {
          reject({
            success: false,
            status: 500,
            message: `Error!, ${err.code}`,
          })
        }
        resolve({
          message: "Get all restaurants success",
          status: 200,
          data: results
        });
      })
    })
  }
  ,
  add: (req, res) => {
    return new Promise((resolve, reject) => {
      const { restaurants_name, restaurants_categories, restaurants_image, restaurants_location, restaurants_rating, restaurants_desc } = req.body
      db.query(`INSERT INTO restaurants(restaurants_name, restaurants_categories, restaurants_image, restaurants_location, restaurants_rating, restaurants_desc) VALUES('${restaurants_name}', '${restaurants_categories}', '${restaurants_image}','${restaurants_location}', '${restaurants_rating}','${restaurants_desc}')`,
        (err, results) => {
          if (err) {
            console.log(err, "uhyuy")
            reject({ message: "ada error" })
          }
          resolve({
            message: "add new restaurants success",
            status: 200,
            data: {
              restaurants_id: results.insertId,
              ...req.body,
            }
          })
        }
      )
    })
  },
  update: (req, res) => {
    return new Promise((resolve, reject) => {
      console.log("hahayyy")
      const { id } = req.params
      db.query(`SELECT * FROM restaurants WHERE restaurants_id='${id}'`, (err, results) => {
        if (err) { res.send({ message: "there's error" }) }
        let previousData = {
          ...results[0],
          ...req.body
        }
        console.log(results[0], "wawaw")
        const { restaurants_name, restaurants_categories, restaurants_image, restaurants_location, restaurants_rating, restaurants_desc } = previousData
        const tempImg = results[0].restaurants_image
        if (req.file === '') {
          previousData = {
            ...previousData,
            restaurants_image: results[0].restaurants_image
          }
        }
        if (req.file) {
          if (tempImg !== req.file.filename) {
            console.log('first:', tempImg, 'second:', req.file.filename)
            fs.unlink(`uploads/${tempImg}`, (err) => { })
            previousData = {
              ...previousData,
              restaurants_image: req.file.filename
            }
          }
        }
        db.query(`UPDATE restaurants SET restaurants_name='${restaurants_name}',restaurants_categories='${restaurants_categories}', restaurants_image='${restaurants_image}', restaurants_location='${restaurants_location}', restaurants_rating='${restaurants_rating}' ,restaurants_desc='${restaurants_desc}' WHERE restaurants_id='${id}'`, (err, results) => {
          if (err) {
            console.log(err)
            reject({ message: "there's an error" })
          }
          resolve({
            message: "update restaurants success",
            status: 200,
            data: results
          })
        })
      })
    })
  },
  remove: (req, res) => {
    return new Promise((resolve, reject) => {
      const { id } = req.params
      db.query(`SELECT restaurants_id, restaurants_image FROM restaurants WHERE restaurants_id='${id}'`, (err, results) => {
        if (err) {
          reject({ message: "there's error" })
        } else if (results.length === 0) {
          reject({
            success: false,
            status: 400,
            message: "delete error, data not found"
          })
        } else {
          const tempImg = results[0].restaurants_image
          db.query(`DELETE FROM restaurants WHERE restaurants_id=${id}`, (err, res) => {
            if (err) {
              console.log(err, "error delete")
              reject({
                success: false,
                status: 500,
                message: 'error'
              })
            } else {
              fs.unlink(`./uploads/${tempImg}`, (err) => {
                if (err) {
                  console.log(err, "error image")
                  reject({
                    success: false,
                    status: 500,
                    message: 'error'
                  })
                }
              })
              resolve({
                success: true,
                message: "delete restaurants success",
                status: 200,
                data: results
              })
            }
          })
        }
      })
    })
  }
}