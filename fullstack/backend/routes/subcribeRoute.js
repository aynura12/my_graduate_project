const express = require("express");
const router = express.Router();
const subcribeController = require("../controllers/subcribeController");

router.get("/", subcribeController.subcribe_getAll);
router.get("/:id", subcribeController.subcribe_getAll_byId);
router.post("/", subcribeController.subcribe_post);
router.delete("/:id", subcribeController.subcribe_delete)
router.put("/:id", subcribeController.subcribe_update)


module.exports=router
