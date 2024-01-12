import  express from 'express'
import  cors from 'cors'
import  dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './src/routes/product.js'
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>",process.env.PASSOWRD)

mongoose.connect(url).then(console.log('db connected'))

app.use("/api",router)

app.listen(port, () => {
  console.log(`Example app listening `)
})