import mongoose from "mongoose";

export const dbconnect = () =>{
    mongoose.connect("mongodb://localhost:27017/mongoose1").then(()=>{
    console.log("db connected successfully")
})}