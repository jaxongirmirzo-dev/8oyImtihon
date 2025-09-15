import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #E0E6E3",
          paddingBottom: "32.5px",
        }}
      >
        <img src="/images/logo.svg" alt="" />
        <ul className="navbar"
          style={{
            display: "flex",
            gap: "40px",
            paddingRight: "279.5px",
            paddingLeft: "279.5px",
          }}
        >
          <li
            className="navbar__items"
            style={{ fontSize: "18px", color: "#163A34" }}
          >
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid #ff9966" : "none",
                paddingBottom: "5px",
                color: "#123c36",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li
            className="navbar__items"
            style={{ fontSize: "18px", color: "#163A34" }}
          >
            <NavLink
              to={"/about"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid #ff9966" : "none",
                paddingBottom: "5px",
                color: "#123c36",
                textDecoration: "none",
              })}
            >
              About
            </NavLink>
          </li>
          <li
            className="navbar__items"
            style={{ fontSize: "18px", color: "#163A34" }}
          >
            <NavLink
              to={"/recipes"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid #ff9966" : "none",
                paddingBottom: "5px",
                color: "#123c36",
                textDecoration: "none",
              })}
              
            >
              Recipes
            </NavLink>
          </li>
        </ul>

        <button
          className="btn"
          style={{
            paddingRight: "16px",
            paddingLeft: "16px",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          Browse Recipe
        </button>
      </div>
    </>
  );
}

export default Header;
