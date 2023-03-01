const News = require("../models/newsModel");

exports.news_getAll = (req, res) => {
  News.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.news_getAll_byId = (req, res) => {
  const { id } = req.params;
  News.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.news_post = async (req, res) => {
  let newss = req.body;
  try {
    await News.create(newss);
    res.status(200).json({
      message: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.news_delete = (req, res) => {
  const { id } = req.params;
  News.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULY DELETE");
    } else {
      res.status(500).json({
        message: err,
      });
    }
  });
};
exports.news_update = async (req, res) => {
  try {
    const example = await News.findByIdAndUpdate(req.params.id, req.body, {
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
