//import modules
// import { json } from "body-parser"
import express from"express"
// import mongoose from "mongoose"
import {dbconnect} from "./db/connection.js"
import bookrouter from "./src/modules/book/book.router.js"
import authorRouter from "./src/modules/author/author.router.js"
const app=express()
app.use(express.json())
app.use('/book',bookrouter)
app.use('/author',authorRouter)


const port=3000

dbconnect()

app.listen(port,()=>{
console.log("Server is running on port",port)
})