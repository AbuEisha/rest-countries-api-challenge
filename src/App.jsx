import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "country/:name",
        lazy: () => import("./pages/CountryDetails"),
        errorElement: <NotFound />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
