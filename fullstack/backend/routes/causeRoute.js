const express = require("express");
const router = express.Router();
const causeController = require("../controllers/causeController");

router.get("/", causeController.cause_getAll);  
router.get("/:id", causeController.cause_getAll_byId);
router.post("/", causeController.cause_post);
router.delete("/:id", causeController.cause_delete)
router.put("/:id", causeController.cause_update)


module.exports=router
