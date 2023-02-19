const Read=require("../models/readModel")
exports.read_getAll=(req,res)=>{
    Read.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.read_getAll_byId=(req,res)=>{
    const { id } = req.params
    Read.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.read_post=async(req,res)=>{
    let reads =req.body
   try{
    await Read.create(reads)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.read_delete = (req, res) => {
    const { id } = req.params;
   Read.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.read_update = async (req, res) => {
    try {
        const example = await Read.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}