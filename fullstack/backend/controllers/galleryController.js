const Gallery = require("../models/galleryModel");

exports.gallery_getAll = (req, res) => {
  Gallery.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.gallery_getAll_byId = (req, res) => {
  const { id } = req.params;
  Gallery.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ messaje: err });
    }
  });
};

exports.gallery_post = async (req, res) => {
  let gallerys = req.body;
  try {
    await Gallery.create(gallerys);
    res.status(200).json({
      message: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.gallery_delete = (req, res) => {
  const { id } = req.params;
  Gallery.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULY DELETE");
    } else {
      res.status(500).json({
        message: err,
      });
    }
  });
};

exports.gallery_update = async (req, res) => {
  try {
    const example = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
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
