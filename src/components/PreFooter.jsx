function PreFooter() {
  return (
    <div className="container">
      <div
        className=" pre__footer"
        style={{
          backgroundColor: "#E9EDE8",
          paddingRight: "124px",
        }}
      >
        <h3
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#163A34",
            textAlign: "center",
            paddingTop: "96px",
            paddingBottom: "12px",
          }}
        >
          Ready to cook smarter?
        </h3>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#395852",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <button
          className="btn"
          style={{
            padding: "16px 24px",
            marginBottom: "96px",
            marginLeft: "490px",
          }}
        >
          Browse recipe
        </button>
      </div>
    </div>
  );
}

export default PreFooter;
