require('dotenv').config()
const os = require('os')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')

const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const patientRouter = require('./routes/patient')


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
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
server.use('/auth', authRouter.router)
server.use('/admin', adminRouter.router)
server.use('/patient', patientRouter.router)


/* SERVER LISTEN */
// const hostname = getLocalIpAddress();
server.listen(process.env.PORT, () => {
  console.log(`Server Started at http://localhost:${process.env.PORT}`)
})

function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const key in interfaces) {
        const iface = interfaces[key];
        for (let i = 0; i < iface.length; i++) {
            const { address, family, internal } = iface[i];
            if (family === 'IPv4' && !internal) {
                return address;
            }
        }
    }
    return '127.0.0.1';
}
