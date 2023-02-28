const CauseComment=require("../models/causeCommentModul")


exports.causeComment_getAll=(req,res)=>{
    CauseComment.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.causeComment_getAll_byId=(req,res)=>{
    const { id } = req.params
    CauseComment.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.causeComment_post=async(req,res)=>{
    let causesComment =req.body
   try{
    await CauseComment.create(causesComment)
    res.status(200).json({
        message:"succes"
    
    })

   }catch(error){
    console.log(error);
   }
}

exports.causeComment_delete = (req, res) => {
    const { id } = req.params;
   CauseComment.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.causeComment_update = async (req, res) => {
    try {
        const example = await CauseComment.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
