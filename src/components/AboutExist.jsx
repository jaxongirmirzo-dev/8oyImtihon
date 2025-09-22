function AboutExist() {
  return (
    <div className="existence__container">
      <div className="existence container">
        <div className="existence__left-side">
          <h2 className="existence__title">Why we exist</h2>
        </div>

        <div className="existence__right-side">
          <ul className="existence__list">
            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Cut through the noise.</h5>
                <p>
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </li>
            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Empower home kitchens.</h5>
                <p>
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </li>
            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Make healthy look good.</h5>
                <p>
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutExist;
