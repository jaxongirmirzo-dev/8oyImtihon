function AboutPlate() {
  return (
    <div className="plate__container">
      <div className="plate container">
        <div className="plate__info">
          <h2 className="plate__title">Beyond the plate</h2>
          <p className="plate__description">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="plate__list">
            <li className="plate__list__item">
              Encourage family dinners and social cooking.
            </li>
            <li className="plate__list__item">
              Reduce reliance on single-use packaging and delivery waste
            </li>
            <li className="plate__list__item">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>

        <div className="plate__photo">
          <picture>
            <source
              media="(min-width: 1100px)"
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              width={618}
            />

            <source
              media="(min-width: 700px)"
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              width={704}
            />

            <source
              media="(min-width: 340px)"
              srcSet="public/images/image-about-beyond-the-plate-small.webp"
              width={343}
            />

            <img
              className="about__plate__image__photo"
              src="/images/image-about-beyond-the-plate-large.webp"
              width={343}
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default AboutPlate;
