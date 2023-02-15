const mongoose=require("mongoose")

const { Schema } = mongoose
const gallerySchema= new Schema({
    image: {
        type: String,
        require: true
    }
},
{ timestamps: true },)

module.exports =  mongoose.model("gallery", gallerySchema)