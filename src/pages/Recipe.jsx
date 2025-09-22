import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const {
    data: recipe,
    loading,
    error,
  } = useFetch("http://localhost:3000/recipes/" + id);

  const ingredients = recipe && recipe.ingredients;
  console.log(ingredients);
  return (
    <>
      <div
        className="single-recipe__main__container container"
        key={recipe && recipe.id}
      >
        <div className="single-recipe__container">
          <h3 className="single-recipe__main-title">
            <span className="single-recipe__main-title__span">Recipe /</span>{" "}
            {recipe && recipe.title}
          </h3>
          <div className="single-recipe__content-container">
            <div className="single-recipe__image">
              <img src={recipe && recipe.image.large} alt="" width={580} />
            </div>

            <div className="single-recipe__details">
              <h1 className="single-recipe__title">{recipe && recipe.title}</h1>
              <p className="single-recipe__overview">
                {recipe && recipe.overview}
              </p>
              <div className="single-recipe__numbers recipes__info__numbers">
                <p className="recipe__servings">
                  <img src="/images/icon-servings.svg" alt="" />
                  Servings: {recipe && recipe.servings}
                </p>
                <p className="recipe__prepMinutes">
                  <img src="/images/icon-prep-time.svg" alt="" />
                  Prep: {recipe && recipe.prepMinutes} min
                </p>
                <p className=" recipes__info__numbers">
                  <img src="/images/icon-cook-time.svg" alt="" />
                  Cook: {recipe && recipe.cookMinutes} min
                </p>
              </div>

              <h3 className="single-recipe__ingredients__title">
                Ingredients :
              </h3>

              <ul className="single-recipe__list">
                {recipe &&
                  recipe.ingredients.map((ingredient) => {
                    return (
                      <li className="single-recipe__list__item">
                        <img src="/images/icon-bullet-point.svg" alt="" />
                        <p className="single-recipe__list__item__title">
                          {ingredient}
                        </p>
                      </li>
                    );
                  })}
              </ul>
              <h3 className="single-recipe__ingredients__title">
                Instructions :
              </h3>
              <ul className="single-recipe__instructions-list">
                {recipe &&
                  recipe.instructions.map((instruction) => {
                    return (
                      <li className="single-recipe__list__item">
                        <img src="/images/icon-bullet-point.svg" alt="" />
                        <p className="single-recipe__list__item__title">
                          {instruction}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Recipe;
