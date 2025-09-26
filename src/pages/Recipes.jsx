import { useState } from "react";
import PreFooter from "../components/PreFooter";
import { useFetch } from "../hooks/useFetch";
import Cards from "./Cards";
import { Navigate } from "react-router-dom";

function Recipes() {
  const { data, loading, error } = useFetch(
    "https://68d69084c2a1754b426b2f17.mockapi.io/recipes/recipes"
  );
  const [input, setInput] = useState("");

  const search = (e) => {
    setInput(e.target.value);
    if (loading) {
      return <h1 style={{ textAlign: "center" }}>loading...</h1>;
    }
  };

  if (!data) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="recipes__list__container ">
      <div className="recipes__hero">
        <h1 className="recipes__title">Explore our simple, healthy recipes</h1>
        <p className="recipes__description">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <span>Search</span>
          <input
            type="search"
            placeholder="search"
            name="search"
            onChange={search}
            value={input}
          />
        </label>
        <button>submit</button>
      </form>

      <ul className="recipes__list container">
        {data &&
          data
            .filter((recipe) => {
              return recipe.title.toLowerCase().includes(input.toLowerCase());
            })
            .map((recipe) => {
              return <Cards recipe={recipe} key={recipe.id} />;
            })}
      </ul>
      <PreFooter />
    </div>
  );
}

export default Recipes;
