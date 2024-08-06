const express = require("express");
const { createTodo, getTodoList } = require("../controller/todoController");

const router = express.Router();

router.post("/todo", createTodo);
router.get("/list", getTodoList);

module.exports = router;
