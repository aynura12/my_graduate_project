const Donate=require("../models/donateModel")


exports.donate_getAll=(req,res)=>{
    Donate.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.donate_getAll_byId=(req,res)=>{
    const { id } = req.params
    Donate.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.donate_post=async(req,res)=>{
    let donates =req.body
   try{
    await Donate.create(donates)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.donate_delete = (req, res) => {
    const { id } = req.params;
    Donate.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.donate_update = async (req, res) => {
    try {
        const example = await Donate.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}