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

exports.comment_update = async (req, res) => {
    try {
        const example = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}