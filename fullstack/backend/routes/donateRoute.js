const express = require("express");
const router = express.Router();
const donateController = require("../controllers/donateController");

router.get("/", donateController.donate_getAll);  
router.get("/:id", donateController.donate_getAll_byId);
router.post("/", donateController.donate_post);
router.delete("/:id", donateController.donate_delete)

module.exports=router
