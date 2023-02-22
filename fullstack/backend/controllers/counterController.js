const Counter=require("../models/counterModel")


exports.counter_getAll=(req,res)=>{
    Counter.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.counter_getAll_byId=(req,res)=>{
    const { id } = req.params
    Counter.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.counter_post=async(req,res)=>{
    let counters =req.body
   try{
    await Counter.create(counters)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.counter_delete = (req, res) => {
    const { id } = req.params;
    Counter.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}
exports.counter_update = async (req, res) => {
    try {
        const example = await Counter.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
