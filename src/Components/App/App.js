import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Title from "../Title";

function App() {
  return (
    <main className="App">
      <nav className="navigation">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/projects" className="nav-item">
          Projects
        </Link>
      </nav>
      <Outlet />
      <Title />
    </main>
  );
}

export default App;
