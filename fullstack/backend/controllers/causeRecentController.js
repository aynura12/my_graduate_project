const CauseRecent = require("../models/causeRecentModel");

exports.causeRecent_getAll = (req, res) => {
  CauseRecent.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.causeRecent_getAll_byId = (req, res) => {
  const { id } = req.params;
  CauseRecent.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.causeRecent_post = async (req, res) => {
  let causesRecent = req.body;
  try {
    await CauseRecent.create(causesRecent);
    res.status(200).json({
      message: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.causeRecent_delete = (req, res) => {
  const { id } = req.params;
  CauseRecent.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULY DELETE");
    } else {
      res.status(500).json({
        message: err,
      });
    }
  });
};
exports.causeRecent_update = async (req, res) => {
  try {
    const example = await CauseRecent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!example) {
      return res.status(404).json({ message: "Gallery not found" });
    }

    res.status(200).json(example);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
