const mongoose=require("mongoose")

const { Schema } = mongoose
const subcribeSchema= new Schema({
    email: {
        type: String,
        require: true
    }
},
{ timestamps: true },)

module.exports =  mongoose.model("subcribe", subcribeSchema)