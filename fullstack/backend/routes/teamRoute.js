const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router.get("/", teamController.team_getAll);  
router.get("/:id", teamController.team_getAll_byId);
router.post("/", teamController.team_post);
router.delete("/:id", teamController.team_delete)
router.put("/:id", teamController.team_update)


module.exports=router
