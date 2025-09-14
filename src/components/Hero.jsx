function Hero() {
  return (
    <>
      <div
        className="container"
        style={{
          marginBottom: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "72px",
            marginTop: "80px",
            marginBottom: "12px",
            color: "#395852",
          }}
        >
          <span
            style={{
              backgroundColor: "#fdd9c1",
              borderRadius: "4px",
            }}
          >
            Healthy
          </span>
          meals, zero fuss
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#395852",
            fontSize: "20px",
            width: "580px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "40px",
          }}
        >
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>

        <button
          className="btn"
          style={{
            padding: "16px 32px",
          }}
        >
          Start Exploring
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <picture>
          <source
            media="(min-width: 1100px)"
            srcSet="./public/images/image-home-hero-large.webp"
            width={"1192px"}
          />

          <source
            media="(min-width: 700px)"
            srcSet="./public/images/image-home-hero-small.webp"
          />

          <source
            media="(min-width: 340px)"
            srcSet="./public/images/image-home-hero-small.webp"
          />

          <img
            src="../public/images/image-home-hero-small.webp"
            alt="Hero image"
            style={{ borderRadius: "12px", border: "12px solid white" }}
          />
        </picture>
      </div>
    </>
  );
}

export default Hero;
