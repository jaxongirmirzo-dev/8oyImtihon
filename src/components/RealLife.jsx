function RealLife() {
  return (
    <>
      <div className="real__life__container container">
        <div className="real__life__info">
          <h3>Built for real life</h3>
          <p>
            Cooking shouldn’t be complicated. These recipes come in under
            <span>30 minutes</span>
            of active time, fit busy schedules, and taste good enough to repeat.
            <br /> Whether you’re new to the kitchen or just need fresh ideas,
            we’ve got you covered.
          </p>
        </div>

        <div className="real__life__image">
          <img
            src="/images/image-home-real-life-small.webp"
            alt=""
            width={635}
          />
        </div>
      </div>
    </>
  );
}

export default RealLife;
