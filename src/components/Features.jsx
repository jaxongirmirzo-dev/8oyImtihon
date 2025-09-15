function Features() {
  return (
    <div>
      <h2
        style={{
          fontSize: "48px",
          marginTop: "96px",
          textAlign: "center",
          fontWeight: "800",
          marginBottom: "48px",
          color: "#163A34",
        }}
      >
        What you’ll get
      </h2>

      <ul
        className="container"
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: "32px",
          borderBottom: "1px solid #E0E6E3",
          paddingBottom: "97px",
        }}
      >
        <li className="hero__list__item__icon">
          <img src="/images/icon-whole-food-recipes.svg" alt="" />
          <h4>Whole-food recipes</h4>
          <p>Each dish uses everyday, unprocessed ingredients.</p>
        </li>
        <li className="hero__list__item__icon">
          <img src="/images/icon-minimum-fuss.svg" alt="" />
          <h4>Minimum fuss</h4>
          <p>All recipes are designed to make eating healthy quick and easy.</p>
        </li>
        <li className="hero__list__item__icon">
          <img src="/images/icon-search-in-seconds.svg" alt="" />
          <h4>Search in seconds</h4>
          <p>
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Features;
