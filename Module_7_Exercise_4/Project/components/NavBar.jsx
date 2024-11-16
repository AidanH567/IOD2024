import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/Themes";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? theme.foreground : "#888",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dash"
            style={({ isActive }) => ({
              color: isActive ? theme.foreground : "#888",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? theme.foreground : "#888",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
