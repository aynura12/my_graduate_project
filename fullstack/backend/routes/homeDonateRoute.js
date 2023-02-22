const express = require("express");
const router = express.Router();
const homeDonateController = require("../controllers/homeDonateController");

router.get("/", homeDonateController.homeDonate_getAll);
router.get("/:id", homeDonateController.homeDonate_getAll_byId);
router.post("/", homeDonateController.homeDonate_post);
router.delete("/:id", homeDonateController.homeDonate_delete)
router.put("/:id", homeDonateController.homeDonate_update)


module.exports=router
