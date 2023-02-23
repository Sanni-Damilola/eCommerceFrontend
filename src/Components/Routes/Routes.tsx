import React from "react";
import { useRoutes } from "react-router-dom";
import CartPage from "../Cart/CartPage";
import HomeScreen from "../Home/HomeScreen";
import Product from "../Product/Product";
import Register from "../Register/Register";
import SinglePage from "../SinglePage/SinglePage";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/details/:id",
      element: <SinglePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
};

export default Routes;
