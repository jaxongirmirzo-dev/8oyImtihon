import { Form, useActionData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import RealLife from "../components/RealLife";
import PreFooter from "../components/PreFooter";

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

      <Hero />

      <Features />

      <RealLife />
      <PreFooter />
    </>
  );
}

export default Home;
