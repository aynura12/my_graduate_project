const HomeDonate=require("../models/homeDonateModel")


exports.homeDonate_getAll=(req,res)=>{
    HomeDonate.find({}, (err, docs) => {
        if (!err) {

            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.homeDonate_getAll_byId=(req,res)=>{
    const { id } = req.params
    HomeDonate.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.homeDonate_post=async(req,res)=>{
    let homeDonates =req.body
   try{
    await HomeDonate.create(homeDonates)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.homeDonate_delete = (req, res) => {
    const { id } = req.params;
    HomeDonate.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}
exports.homeDonate_update = async (req, res) => {
    try {
        const example = await HomeDonate.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// exports.homeDonate_login=(req,res)=>{
//     const { userName,password } = req.params
//     HomeDonate.findById(id, (err, docs) => {
//         if (!err) {
//          const  doc= docs.filter(userName=userName)
//          if (doc.password!=password){
//             res.status(500).json({ messaje: err })
//          }
//             res.send(doc)
//         } else {
//             res.status(500).json({ messaje: err })
//         }
//     })
// }
