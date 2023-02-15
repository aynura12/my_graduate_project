const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const app=express()

const PORT=process.env.PORT
const PASSWORD=process.env.PASSWORD
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