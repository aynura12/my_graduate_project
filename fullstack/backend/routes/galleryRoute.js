const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.get("/", galleryController.gallery_getAll);
router.get("/:id", galleryController.gallery_getAll_byId);
router.post("/", galleryController.gallery_post);
router.delete("/:id", galleryController.gallery_delete)
router.put("/:id", galleryController.gallery_update)


module.exports=router
