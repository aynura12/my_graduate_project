const Become = require("../models/becomeModel");

exports.become_getAll = (req, res) => {
  Become.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.become_getAll_byId = (req, res) => {
  const { id } = req.params;
  Become.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.become_post = async (req, res) => {
  let becomes = req.body;
  try {
    await Become.create(becomes);
    res.status(200).json({
      message: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.become_delete = (req, res) => {
  const { id } = req.params;
  Become.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULY DELETE");
    } else {
      res.status(500).json({
        message: err,
      });
    }
  });
};

exports.become_update = async (req, res) => {
  try {
    const example = await Become.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!example) {
      return res.status(404).json({ message: "Gallery not found" });
    }

    res.status(200).json(example);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
