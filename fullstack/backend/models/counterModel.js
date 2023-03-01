const mongoose=require("mongoose")

const { Schema } = mongoose
const counterSchema= new Schema({
    count: {
        type: Number,
        require: true
    },
   
    title: {
        type: String,
        require: true
    },
   
},
{ timestamps: true },)

module.exports =  mongoose.model("counter", counterSchema)