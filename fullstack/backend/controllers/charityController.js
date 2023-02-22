const Charity=require("../models/charityModel")


exports.charity_getAll=(req,res)=>{
    Charity.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.charity_getAll_byId=(req,res)=>{
    const { id } = req.params
    Charity.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.charity_post=async(req,res)=>{
    let charitys =req.body
   try{
    await Charity.create(charitys)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.charity_delete = (req, res) => {
    const { id } = req.params;
    Charity.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.charity_update = async (req, res) => {
    try {
        const example = await Charity.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}