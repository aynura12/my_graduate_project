const express = require("express");
const router = express.Router();
const volunteerController = require("../controllers/volunteerController");

router.get("/", volunteerController.volunteer_getAll);  
router.get("/:id", volunteerController.volunteer_getAll_byId);
router.post("/", volunteerController.volunteer_post);
router.delete("/:id", volunteerController.volunteer_delete)
router.put("/:id", volunteerController.volunteer_update)


module.exports=router
