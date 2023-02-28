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

const causeRoute=require("./routes/causeRoute")
app.use("/cause",causeRoute)


const readRoute=require("./routes/readRoute")
app.use("/read",readRoute)

const teamRoute=require("./routes/teamRoute")
app.use("/team",teamRoute)

const volunteerRoute=require("./routes/volunteerRoute")
app.use("/volunteer",volunteerRoute)

const causeCommentRoute=require("./routes/causeCommentRoute")
app.use("/causeComment",causeCommentRoute)


const causeRecentRoute=require("./routes/causeRecentRoute")
app.use("/causeRecent",causeRecentRoute)

const newsRoute=require("./routes/newsRoute")
app.use("/news",newsRoute)

const connectRoute=require("./routes/connectRoute")
app.use("/connect",connectRoute)

const becomeRoute=require("./routes/becomeRoute")
app.use("/become",becomeRoute)

const donateRoute=require("./routes/donateRoute")
app.use("/donate",donateRoute)


const aboutListRoute=require("./routes/aboutListRoute")
app.use("/aboutList",aboutListRoute)


const counterRoute=require("./routes/counterRoute")
app.use("/counter",counterRoute)

const charityRoute=require("./routes/charityRoute")
app.use("/charity",charityRoute)


const homeDonateRoute=require("./routes/homeDonateRoute")
app.use("/homedonate",homeDonateRoute)

const subcribeRoute=require("./routes/subcribeRoute")
app.use("/subcribe",subcribeRoute)

const UserRoute=require("./routes/UserRoute")
app.use("/user",UserRoute)