const express = require("express");
const router = express.Router();
const charityController = require("../controllers/charityController");

router.get("/", charityController.charity_getAll);  
router.get("/:id", charityController.charity_getAll_byId);
router.post("/", charityController.charity_post);
router.delete("/:id", charityController.charity_delete)
router.put("/:id", charityController.charity_update)


module.exports=router
