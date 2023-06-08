const express = require("express");

const postController = require("../controller/post");

const router = express.Router();

// http://localhost:3003/blog/......
router.get("/posts", postController.getPosts);

router.post("/post", postController.createPost);

router.get("/post/:id", postController.getById);

module.exports = router;

