function Features() {
  return (
    <div className="features__container">
      <div className="features">
        <h2 className="features__title">What you’ll get</h2>

        <ul className="features__list container">
          <li className="features__list__item">
            <img src="/images/icon-whole-food-recipes.svg" alt="" />
            <h4>Whole-food recipes</h4>
            <p>Each dish uses everyday, unprocessed ingredients.</p>
          </li>
          <li className="features__list__item">
            <img src="/images/icon-minimum-fuss.svg" alt="" />
            <h4>Minimum fuss</h4>
            <p>
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </li>
          <li className="features__list__item">
            <img src="/images/icon-search-in-seconds.svg" alt="" />
            <h4>Search in seconds</h4>
            <p>
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
