import { Link } from "react-router-dom";

function Cards({ recipe }) {
  return (
    <li key={recipe.id} className="recipes__list__item">
      <div className="recipe__info__container">
        <img className="recipe__image" src={recipe.image.large} alt="" />
        <h3 className="recipe__title">{recipe.title}</h3>
        <p className="recipe__overview">{recipe.overview}</p>
        <div className="recipe__numbers__container">
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
        </div>

        <Link className="recipes__btn" to={`/recipe/${recipe.id}`}>
          <button className="btn recipes__btn">view recipe</button>
        </Link>
      </div>
    </li>
  );
}

export default Cards;
