require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const adminRouter = require('./routes/admin')


/* EXPRESS SERVER  */
const server = express()

/* DB CONNECTION TO MONGO ATLAS */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err)
  })

/* BODY PARSERS */
server.use(express.json())

/* MIDDLEWARES */


/* ROUTES */
server.use(cors())
server.use('/admin', adminRouter.router)

/* SERVER LISTEN */
server.listen(process.env.PORT, () => {
  console.log('Server Started')
})
