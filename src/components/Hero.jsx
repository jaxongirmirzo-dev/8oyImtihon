function Hero() {
  return (
    <div className="hero__container">
      <div className="hero container">
        <h1 className="hero__title">
          <span>Healthy</span>
          meals, zero fuss
        </h1>
        <p className="hero__subtitle">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>

        <button className="btn hero__btn">Start Exploring</button>
      </div>

      <div
        className="hero-images__container"
       
      >
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet="/images/image-home-hero-large.webp"
            width={"1192px"}
          />

          <source
            media="(min-width: 700px)"
            srcSet="/images/image-home-hero-small.webp"
          />

          <source
            media="(min-width: 340px)"
            srcSet="/images/image-home-hero-small.webp"
          />

          <img
            src="/images/image-home-hero-small.webp"
            alt="Hero image"
           
          />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
