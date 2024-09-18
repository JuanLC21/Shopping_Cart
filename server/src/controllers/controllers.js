import { dataProducts, PATH as path } from '../data/products.js'
import { writeFile } from 'fs'

function writeContent(file) {
    const fileString = JSON.stringify(file, null, 2)
    writeFile(path, fileString, (error) => {
        if (error) console.error('Error:', error)
        else console.log('File has been changed succesful')
    })
}
// ALL
export const getAll = (req, res) => {
    dataProducts().then((data) => { res.send(data.products) })
}

// GET: Read.
export const getProduct = (req, res) => {
    const query = parseInt(req.params.productId)
    dataProducts().then((data) => { 
        const product = data.products.find(item => item.id === query)
        res.json(product)
    }).catch((error) => { console.log(error) })
}

// PUT: Update.
export const putProduct = (req, res) => {
    const query = parseInt(req.params.productId)
    dataProducts().then((data) => {
        const dataJ = data.products
        const productIndex = dataJ.findIndex((product) => product.id === query)
        dataJ[productIndex] = {...dataJ[productIndex], ...req.body}
        writeContent(data)
        res.json(dataJ[productIndex])
    }).catch((error) => { console.log(error) })
}

// POST: Create.
export const postProduct = (req, res) => {
    dataProducts().then((data) => {
        const dataJ = data.products
        dataJ.push(req.body)
        writeContent(data)
        res.json(dataJ[dataJ.length - 1])
    }).catch((error) => { console.log(error) })
}

// DELETE: Remove.
export const deleteProduct = (req, res) => {
    const query = parseInt(req.params.productId)
    dataProducts().then((data) => {
        const dataJ = data.products
        const indx = dataJ.findIndex((product) => product.id === query)
        dataJ.splice(indx, 1)
        writeContent(data)
        res.json(dataJ)
    }).catch((error) => { console.log(error) })
}