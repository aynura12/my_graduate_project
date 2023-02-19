const express = require("express");
const router = express.Router();
const becomeController = require("../controllers/becomeController");

router.get("/", becomeController.become_getAll);  
router.get("/:id", becomeController.become_getAll_byId);
router.post("/", becomeController.become_post);
router.delete("/:id", becomeController.become_delete)
router.put("/:id", becomeController.become_update)


module.exports=router
