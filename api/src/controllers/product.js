import { Products } from "../models/product.js"

export const getProduct = async (req, res) => {
    try {
        const product = await Products.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}



export const getProductById = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Products.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}


export const deleteProduct = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Products.findByIdAndDelete(id)
        res.status(200).json('product deleted')
    } catch (error) {
        res.status(500).json({ message: error })

    }
}


export const createProduct = async (req, res) => {
    try {
        const newProduct = new Products({...req.body})
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}



export const updateProduct = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Products.findByIdAndUpdate(id,req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}