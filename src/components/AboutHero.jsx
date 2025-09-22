function AboutHero() {
  return (
    <div className="about__hero__container">
      <div className="about__hero container ">
        <div className="about__hero__info ">
          <small>Our mission</small>
          <h1>Help more people cook nourishing meals, more often.</h1>
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious. <br /> <br /> We
            showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>

        <div className="about__hero__image">
          <picture>
            <source
              media="(min-width: 1100px)"
              srcSet="/images/image-about-our-mission-large.webp"
              width={618}
            />

            <source
              media="(min-width: 700px)"
              srcSet="/images/image-about-our-mission-large.webp"
              width={704}
            />

            <source
              media="(min-width: 340px)"
              srcSet="/images/image-about-our-mission-small.webp"
              width={343}
            />

            <img
              className="about__hero__image__photo"
              src="/images/image-about-our-mission-large.webp"
              width={343}
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
