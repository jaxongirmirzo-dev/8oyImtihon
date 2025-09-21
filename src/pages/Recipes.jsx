import PreFooter from "../components/PreFooter";
import { useFetch } from "../hooks/useFetch";

function Recipes() {
  const { data, loading, error } = useFetch(
    "https://recipesbackend-production.up.railway.app/recipes"
  );
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
            return (
              <li key={recipe.id} className="recipes__list__item">
                <div className="recipe__info__container">
                  <img
                    className="recipe__image"
                    src={recipe.image.large}
                    alt=""
                  />
                  <h3 className="recipe__title">{recipe.title}</h3>
                  <p className="recipe__overview">{recipe.overview}</p>
                  <div className="servings__prepMinutes recipes__info__numbers">
                    <p className="recipe__servings">
                      <img src="/images/icon-servings.svg" alt="" />
                      Servings: {recipe.servings}
                    </p>
                    <p className="recipe__prepMinutes">
                      <img src="/images/icon-prep-time.svg" alt="" />
                      Prep: {recipe.prepMinutes} min
                    </p>
                  </div>
                  <p className="recipe__cookMinutes recipes__info__numbers">
                    <img src="/images/icon-cook-time.svg" alt="" />
                    Cook: {recipe.cookMinutes} min
                  </p>
                  <button className="btn recipes__btn">view recipe</button>
                </div>
              </li>
            );
          })}
      </ul>

      <PreFooter />
    </div>
  );
}

export default Recipes;
