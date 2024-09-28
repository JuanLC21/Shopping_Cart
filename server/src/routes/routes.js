import express from 'express'
import { getAll, getProduct, putProduct, postProduct, deleteProduct } from '../controllers/controllers.js'
import { SERVER_URL } from '../config.js' 

const router = express.Router()

router
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', SERVER_URL); 
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); 
        res.header('Access-Control-Allow-Headers', 'Content-Type'); 
        next();
    })
    .get('/all', getAll)
    .get('/:productId', getProduct)
    .use(express.json())
    .put('/:productId', putProduct)
    .post('/all', postProduct)
    .delete('/:productId', deleteProduct)

export default router