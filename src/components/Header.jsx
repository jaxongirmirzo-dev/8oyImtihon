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
        <img src="./public/images/logo.svg" alt="" />
        <ul
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
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className="navbar__items"
            style={{ fontSize: "18px", color: "#163A34" }}
          >
            <NavLink to={"./about"}>About</NavLink>
          </li>
          <li
            className="navbar__items"
            style={{ fontSize: "18px", color: "#163A34" }}
          >
            <NavLink to={"./recipes"}>Recipes</NavLink>
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
