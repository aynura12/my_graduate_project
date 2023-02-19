const express = require("express");
const router = express.Router();
const causeCommentController = require("../controllers/causeCommentController");

router.get("/", causeCommentController.causeComment_getAll);  
router.get("/:id", causeCommentController.causeComment_getAll_byId);
router.post("/", causeCommentController.causeComment_post);
router.delete("/:id", causeCommentController.causeComment_delete)
router.put("/:id", causeCommentController.causeComment_update)


module.exports=router
