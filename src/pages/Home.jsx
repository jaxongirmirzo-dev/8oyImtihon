import { Form, useActionData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "recipes",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const action =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    return products;
  };

function Home() {
  const actionData = useActionData();

  return (
    <>
      {/* <Form method="post">
        <input type="text" name="title" />
        <input type="text" name="age" />
        <button>Click</button>
      </Form> */}

      <Header />
      <section style={{ marginRight: "124px", marginLeft: "124px" }}>
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
                padding: "4px 4px 0 -100px",
              }}
            >
              Healthy
            </span>{" "}
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
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
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
              src="./public/images/image-home-hero-small.webp"
              alt="Hero image"
            />
          </picture>
        </div>

        <div>
          <h2
            style={{
              fontSize: "48px",
              marginTop: "96px",
              textAlign: "center",
              fontWeight: "800",
              marginBottom: "48px",
              color: "#163A34",
            }}
          >
            What you’ll get
          </h2>

          <ul
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              borderBottom: "1px solid #E0E6E3",
              paddingBottom: "97px",
            }}
          >
            <li className="hero__list__item__icon">
              <img src="./public/images/icon-whole-food-recipes.svg" alt="" />
              <h4>Whole-food recipes</h4>
              <p>Each dish uses everyday, unprocessed ingredients.</p>
            </li>
            <li className="hero__list__item__icon">
              <img src="./public/images/icon-minimum-fuss.svg" alt="" />
              <h4>Minimum fuss</h4>
              <p>
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </li>
            <li className="hero__list__item__icon">
              <img src="./public/images/icon-search-in-seconds.svg" alt="" />
              <h4>Search in seconds</h4>
              <p>
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </li>
          </ul>

          <div
            style={{
              marginTop: "85.5px",
              marginBottom: "96px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="container"
              style={{
                color: "#163A34",
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
                </span>{" "}
                of active time, fit busy schedules, and taste good enough to
                repeat.
              </p>
              <p style={{ fontSize: "20px" }}>
                Whether you’re new to the kitchen or just need fresh ideas,
                we’ve got you covered.
              </p>
            </div>
            <div style={{ width: "100%", maxWidth: "605px" }}>
              <img
                style={{
                  borderRadius: "16px",
                }}
                src="./public/images/image-home-real-life-small.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
