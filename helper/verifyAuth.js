const jwt = require('jsonwebtoken')


const verifyAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'unathorized user, token needed' })
  } else {
    const token = req.headers.authorization
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      console.log(decoded, "test dicoding")
      if (err) {
        console.log(err)
        return res.status(403).send({ message: 'forbidden' })
      }
      else {
        next()
      }
    });
  }

}

module.exports = verifyAuth