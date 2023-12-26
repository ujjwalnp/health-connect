require('dotenv').config()
const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'API',
        description: 'API Documentation',
    },
    host: 'http://localhost:8000',
}

const outputFile = './swagger-output.json'
const routes = [
    './routes/auth.js',
    './routes/admin.js',
]

swaggerAutogen(outputFile, routes, doc)