const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/", eventController.event_getAll);
router.get("/:id", eventController.event_getAll_byId);
router.post("/", eventController.event_post);
router.delete("/:id", eventController.event_delete)

module.exports=router
