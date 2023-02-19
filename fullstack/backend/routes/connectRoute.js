const express = require("express");
const router = express.Router();
const connectController = require("../controllers/connectController");

router.get("/", connectController.connect_getAll);  
router.get("/:id", connectController.connect_getAll_byId);
router.post("/", connectController.connect_post);
router.delete("/:id", connectController.connect_delete)
router.put("/:id", connectController.connect_update)


module.exports=router
