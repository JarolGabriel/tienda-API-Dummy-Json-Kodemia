import { createRoot } from "react-dom/client";
import "./index.css";

import HomePages from "./pages/HomePages";
import LoginPages from "./pages/LoginPages";
import ProductDetailPages from "./pages/ProductDetailPages";
import ProductPages from "./pages/ProductPages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePages />,
      },

      {
        path: "/products",
        element: <ProductPages />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPages />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
