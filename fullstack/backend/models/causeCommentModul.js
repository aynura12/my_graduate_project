const mongoose=require("mongoose")

const { Schema } = mongoose
const causeCommentSchema= new Schema({
    image: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
   
},
{ timestamps: true },)

module.exports =  mongoose.model("causeComment", causeCommentSchema)