const express = require("express");
const router = express.Router();
const causeRecentController = require("../controllers/causeRecentController");

router.get("/", causeRecentController.causeRecent_getAll);  
router.get("/:id", causeRecentController.causeRecent_getAll_byId);
router.post("/", causeRecentController.causeRecent_post);
router.delete("/:id", causeRecentController.causeRecent_delete)

module.exports=router
