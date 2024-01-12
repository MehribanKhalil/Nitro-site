import  express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/product.js'

export const router= express.Router()

router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.delete('/product/:id', deleteProduct)
router.put('/product/:id', updateProduct)
router.post('/product', createProduct)