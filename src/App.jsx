import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Home, Recipe, Recipes } from "./pages";
import { action as homeAction } from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          action: homeAction,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    { path: "/notfound", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
