const mongoose=require("mongoose")

const { Schema } = mongoose
const homeDonateSchema= new Schema({
    value:{
        type: String    ,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
},
{ timestamps: true },)

module.exports =  mongoose.model("homedonate", homeDonateSchema)