import PreFooter from "../components/PreFooter";
import { useFetch } from "../hooks/useFetch";
import Cards from "./Cards";

function Recipes() {
  const { data, loading, error } = useFetch("http://localhost:3000/recipes");

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>loading...</h1>;
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
      <ul className="recipes__list container">
        {data &&
          data.map((recipe) => {
            return <Cards recipe={recipe} key={recipe.id} />;
          })}
      </ul>

      <PreFooter />
    </div>
  );
}

export default Recipes;
