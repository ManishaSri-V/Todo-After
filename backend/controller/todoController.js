const Todo = require("../model/todoModel");

exports.createTodo = async (req, res) => {
  const { title, description, complete } = req.body;
  try {
    const todo = new Todo({
      title: title,
      description: description,
      complete: complete,
    });
    await todo.save();
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getTodoList = async (req, res) => {
  try {
    const list = await Todo.find({});
    res.status(200).json({
      success: true,
      data: list,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
