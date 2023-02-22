const express = require("express");
const router = express.Router();
const counterController = require("../controllers/counterController");

router.get("/", counterController.counter_getAll);  
router.get("/:id", counterController.counter_getAll_byId);
router.post("/", counterController.counter_post);
router.delete("/:id", counterController.counter_delete)
router.put("/:id", counterController.counter_update)


module.exports=router
