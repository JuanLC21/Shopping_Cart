import express from 'express'
import router from './routes/routes.js'
const app = express()

const PORT = process.env.PORT ?? 3000

app.use('/ecommerce/products', router)

app.listen(PORT, () => console.log(`Server on port ${PORT}`))