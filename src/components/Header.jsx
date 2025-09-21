import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header__navbar container">
          <img src="/images/logo.svg" alt="" />
          <ul className="navbar">
            <li className="navbar__items">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="navbar__items">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="navbar__items">
              <NavLink to={"/recipes"}>Recipes</NavLink>
            </li>
          </ul>

          <button className="btn header__btn">Browse Recipe</button>
        </div>
      </header>
    </>
  );
}

export default Header;
