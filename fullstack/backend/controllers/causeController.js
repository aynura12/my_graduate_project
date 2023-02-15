const Cause=require("../models/causeModel")


exports.cause_getAll=(req,res)=>{
    Cause.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.cause_getAll_byId=(req,res)=>{
    const { id } = req.params
    Cause.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.cause_post=async(req,res)=>{
    let causes =req.body
   try{
    await Cause.create(causes)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.cause_delete = (req, res) => {
    const { id } = req.params;
   Cause.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}