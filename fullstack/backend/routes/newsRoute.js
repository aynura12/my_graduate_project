const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/", newsController.news_getAll);  
router.get("/:id", newsController.news_getAll_byId);
router.post("/", newsController.news_post);
router.delete("/:id", newsController.news_delete)

module.exports=router
