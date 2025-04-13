import dotenv from 'dotenv'
import swaggerJsdoc from 'swagger-jsdoc'
import fs from 'fs'
import path from 'path'

dotenv.config()

const yamlFiles = fs.readdirSync(path.join(__dirname)).filter((file) => file.endsWith('.yaml'))
console.log('YAML Files Found:', yamlFiles)

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chafetz E-commerce APIs',
            version: '1.0.0',
            description: 'API documentation for Chafetz E-commerce',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        servers: [
            {
                url: `${process.env.URL_HOST}/api`,
            },
        ],
    },
    schemes: ['http', 'https'],
    apis: yamlFiles.map((file) => path.join(__dirname, file)),
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec
