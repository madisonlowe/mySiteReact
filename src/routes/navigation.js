import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
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
      <Outlet />
    </nav>
  );
}
