const mongoose=require("mongoose")

const { Schema } = mongoose
const readSchema= new Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    }
},
{ timestamps: true },)

module.exports =  mongoose.model("read", readSchema)