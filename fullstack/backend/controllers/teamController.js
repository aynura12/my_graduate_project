const Team=require("../models/teamModel")
exports.team_getAll=(req,res)=>{
    Team.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.team_getAll_byId=(req,res)=>{
    const { id } = req.params
    Team.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ messaje: err })
        }
    })
}


exports.team_post=async(req,res)=>{
    let teams =req.body
   try{
    await Team.create(teams)
    res.status(200).json({
        message:"succes"
        
    })

   }catch(error){
    console.log(error);
   }
}

exports.team_delete = (req, res) => {
    const { id } = req.params;
   Team.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
   })}

   exports.team_update = async (req, res) => {
    try {
        const example = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}