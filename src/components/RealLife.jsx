function RealLife() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "85.5px",
          marginBottom: "96px",
          gap: "48px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#163A34",
            width: "509px",
          }}
        >
          <h3 style={{ fontSize: "48px" }}>Built for real life</h3>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Cooking shouldn’t be complicated. These recipes come in under
            <span
              style={{
                backgroundColor: "#FE9F6B",
                borderRadius: "5px",
              }}
            >
              30 minutes
            </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p style={{ fontSize: "20px" }}>
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>

        <div style={{ padding: "4px 14px", marginRight: "-98px" }}>
          <img
            style={{
              borderRadius: "16px",
            }}
            src="./public/images/image-home-real-life-small.webp"
            alt=""
            width={635}
          />
        </div>
      </div>
    </>
  );
}

export default RealLife;
