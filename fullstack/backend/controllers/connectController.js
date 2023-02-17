const Connect=require("../models/connectModel")


exports.connect_getAll=(req,res)=>{
    Connect.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.connect_getAll_byId=(req,res)=>{
    const { id } = req.params
    Connect.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.connect_post=async(req,res)=>{
    let connects =req.body
   try{
    await Connect.create(connects)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.connect_delete = (req, res) => {
    const { id } = req.params;
   Connect.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}