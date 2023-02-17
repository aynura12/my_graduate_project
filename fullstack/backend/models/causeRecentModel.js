const mongoose=require("mongoose")

const { Schema } = mongoose
const causeRecentSchema= new Schema({
    image: {
        type: String,
        require: true
    },
    payment: {
        type: Number,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
  
   
},
{ timestamps: true },)

module.exports =  mongoose.model("causeRecent", causeRecentSchema)