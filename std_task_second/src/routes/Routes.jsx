import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import ProductFilter from "../pages/ProductFilter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{
        path: "/",
        element: <App />
    },
  {
    path: "/productfilter",
    element: <ProductFilter />
  }]
  },
]);
