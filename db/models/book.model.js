import { Schema,model } from "mongoose";
// import { type } from "os";

const bookSchema= new Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    author: {type:String, required:true},
    publishedDate: {
        type: Date,
        default: Date.now
      }
})

export const Book = model('Book',bookSchema)