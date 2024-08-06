import React, { useState } from "react";
import axios from "axios";
import "./TodoForm.css";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCompleteChange = (e) => {
    setComplete(e.target.value);
  };

  const createTodo = async () => {
    const todo = {
      title,
      description,
      complete,
    };
    const response = await axios.post("http://localhost:5050/api/todo", todo);
    console.log(response);
  };

  return (
    <>
      <h1>Create Todo</h1>
      <form className="form">
        <div className="todo">
          <label>
            Title:&nbsp;
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            ></input>
          </label>
        </div>
        <br />
        <div className="todo">
          <label>
            Description:&nbsp;
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></input>
          </label>
        </div>
        <br />
        <div className="todo">
          <label>
            Complete:&nbsp;
            <input
              type="text"
              value={complete}
              onChange={handleCompleteChange}
              required
            ></input>
          </label>
        </div>
        <br />
        <button onClick={createTodo}>Add Todo</button>
      </form>
    </>
  );
}

export default TodoForm;
