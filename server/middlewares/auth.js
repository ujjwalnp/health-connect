const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.header('Authorization')

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' })
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft()
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.user = verified

    const { role } = verified
    req.userRole = role
    
    next()
  } catch (error) {
    // Handle different types of errors
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized: Token has expired' })
    }

    // Handle other JWT verification errors
    console.error('JWT Verification Error:', error)
    return res.status(401).json({ message: 'Unauthorized: Invalid token' })
  }
}
