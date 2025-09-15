function Footer() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ color: "#163A34", fontSize: "16px", fontWeight: "500" }}>
          Made with 💖 and 🥑
        </p>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <img  src="/images/icon-instagram.svg" alt="" />
        <img  src="/images/icon-bluesky.svg" alt="" />
        <img  src="/images/icon-tiktok.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
