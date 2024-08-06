import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Add Todo</Link>
          </li>
          <li>
            <Link to="/list">Get Todo-List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
