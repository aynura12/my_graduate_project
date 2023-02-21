const AboutList=require("../models/aboutListModel")


exports.aboutList_getAll=(req,res)=>{
    AboutList.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.aboutList_getAll_byId=(req,res)=>{
    const { id } = req.params
    AboutList.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.aboutList_post=async(req,res)=>{
    let aboutLists =req.body
   try{
    await  AboutList.create(aboutLists)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.aboutList_delete = (req, res) => {
    const { id } = req.params;
    AboutList.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.aboutList_update = async (req, res) => {
    try {
        const example = await  AboutList.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
