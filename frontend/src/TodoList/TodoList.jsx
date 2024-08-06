import axios from "axios";
import { useState } from "react";
import "./Todolist.css";

function TodoList() {
  const [lists, setLists] = useState([]);

  const todoList = async () => {
    const response = await axios.get("http://localhost:5050/api/list");

    if (response.status === 200) {
      setLists(response.data.data);
    } else {
      alert("some error occured while fetching todolist");
    }
  };
  console.log("These are my Todo's", lists);

  return (
    <>
      <h1>Todo-List</h1>

      <div>
        <table className="list">
          {lists.length > 0 && (
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Complete</th>
            </tr>
          )}
          {lists.map((list, index) => {
            return (
              <tr key={index}>
                <td>{list._id}</td>
                <td>{list.title}</td>
                <td>{list.description}</td>
                <td>{list.complete ? <p>true</p> : <p>false</p>}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <button onClick={todoList}>Todo-List</button>
    </>
  );
}

export default TodoList;
