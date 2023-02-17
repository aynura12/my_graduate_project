const Comment=require("../models/commentModel")


exports.comment_getAll=(req,res)=>{
    Comment.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.comment_getAll_byId=(req,res)=>{
    const { id } = req.params
    Comment.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.comment_post=async(req,res)=>{
    let comments =req.body
   try{
    await Comment.create(comments)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.comment_delete = (req, res) => {
    const { id } = req.params;
    Comment.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}