const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/", commentController.comment_getAll);
router.get("/:id", commentController.comment_getAll_byId);
router.post("/", commentController.comment_post);
router.delete("/:id", commentController.comment_delete)
router.put("/:id", commentController.comment_update)


module.exports=router
