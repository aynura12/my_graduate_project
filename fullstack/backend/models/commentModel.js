const mongoose=require("mongoose")

const { Schema } = mongoose
const commentSchema= new Schema({
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
},
{ timestamps: true },)

module.exports =  mongoose.model("comment", commentSchema)