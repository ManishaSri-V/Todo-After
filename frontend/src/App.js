import "./App.css";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/todo" element={<TodoForm />}></Route>
          <Route path="/list" element={<TodoList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
