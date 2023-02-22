const mongoose=require("mongoose")

const { Schema } = mongoose
const charitySchema= new Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
   
},
{ timestamps: true },)

module.exports =  mongoose.model("charity", charitySchema)