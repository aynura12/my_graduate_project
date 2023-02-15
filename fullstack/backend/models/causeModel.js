const mongoose=require("mongoose")

const { Schema } = mongoose
const causeSchema= new Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    goal: {
        type: Number,
        require: true
    },
    raised: {
        type: Number,
        require: true
    },
   
},
{ timestamps: true },)

module.exports =  mongoose.model("cause", causeSchema)