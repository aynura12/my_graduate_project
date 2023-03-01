const Event = require("../models/eventModule");

exports.event_getAll = (req, res) => {
  Event.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.event_getAll_byId = (req, res) => {
  const { id } = req.params;
  Event.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.event_post = async (req, res) => {
  let events = req.body;
  try {
    await Event.create(events);
    res.status(200).json({
      message: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.event_delete = (req, res) => {
  const { id } = req.params;
  Event.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULY DELETE");
    } else {
      res.status(500).json({
        message: err,
      });
    }
  });
};

exports.event_update = async (req, res) => {
  try {
    const example = await Event.findByIdAndUpdate(req.params.id, req.body, {
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
