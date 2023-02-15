const express = require("express");
const router = express.Router();
const readController = require("../controllers/readController");

router.get("/", readController.read_getAll);  
router.get("/:id", readController.read_getAll_byId);
router.post("/", readController.read_post);
router.delete("/:id", readController.read_delete)

module.exports=router
