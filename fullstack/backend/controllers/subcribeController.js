const Subcibe=require("../models/subcribeModel")


exports.subcribe_getAll=(req,res)=>{
    Subcibe.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.subcribe_getAll_byId=(req,res)=>{
    const { id } = req.params
    Subcibe.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.subcribe_post=async(req,res)=>{
    let subcribes =req.body
   try{
    await Subcibe.create(subcribes)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.subcribe_delete = (req, res) => {
    const { id } = req.params;
    Subcibe.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.subcribe_update = async (req, res) => {
    try {
        const example = await Subcibe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
