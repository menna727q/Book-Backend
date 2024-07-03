import mongoose, { Schema,model } from "mongoose";

const authorschema = new Schema({
    name:{type:String, required:true},
    bio:{type:String},
    birthdate:{type:Date},
    books:[{type:Schema.ObjectId,
        ref:'Book'
    }]
})
export const Author=model('Author',authorschema)