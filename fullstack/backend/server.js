const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())

const PORT=process.env.PORT

const DB=process.env.DB.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', false);
mongoose.connect(DB)
.then(()=>{
    console.log("Connected database");
})
.catch(()=>{
    console.log("Not connected database");
})

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})


const commentRoute=require("./routes/commentRoute")
app.use("/comment",commentRoute)

const galleryRoute=require("./routes/galleryRoute")
app.use("/gallery",galleryRoute)

const eventRoute=require("./routes/eventRoute")
app.use("/event",eventRoute)