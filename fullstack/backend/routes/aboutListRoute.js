const express = require("express");
const router = express.Router();
const aboutListController = require("../controllers/aboutListController");

router.get("/", aboutListController.aboutList_getAll);
router.get("/:id", aboutListController.aboutList_getAll_byId);
router.post("/", aboutListController.aboutList_post);
router.delete("/:id", aboutListController.aboutList_delete);
router.put("/:id", aboutListController.aboutList_update);

module.exports = router;
