const Volunteer=require("../models/volunteerModel")
exports.volunteer_getAll=(req,res)=>{
    Volunteer.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.volunteer_getAll_byId=(req,res)=>{
    const { id } = req.params
    Volunteer.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.volunteer_post=async(req,res)=>{
    let volunteers =req.body
   try{
    await Volunteer.create(volunteers)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.volunteer_delete = (req, res) => {
    const { id } = req.params;
   Volunteer.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })}