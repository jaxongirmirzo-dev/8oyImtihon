function AboutPhilosophy() {
  return (
    <div className="existence__container">
      <div className="existence container">
        <div className="existence__left-side">
          <h2 className="philosophy__title">Our food philosophy</h2>
        </div>

        <div className="existence__right-side ">
          <ul className="existence__list">
            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Whole ingredients first.</h5>
                <p>
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </li>

            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Flavor without compromise.</h5>
                <p>
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </li>

            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Respect for time.</h5>
                <p>
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </li>

            <li className="existence__list__item">
              <div>
                <img src="/images/icon-bullet-point.svg" alt="" />
              </div>
              <div>
                <h5>Sustainable choices.</h5>
                <p>
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPhilosophy;
