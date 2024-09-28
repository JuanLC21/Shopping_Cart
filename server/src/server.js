import express from 'express'
import router from './routes/routes.js'
import { SERVER_PORT } from './config.js'
const app = express()

const PORT = SERVER_PORT

app.use('/ecommerce/products', router)

app.listen(PORT, () => console.log(`Server on port ${PORT}`))