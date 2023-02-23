import React from "react";
import { useRoutes } from "react-router-dom";
import CartPage from "../Cart/CartPage";
import HomeScreen from "../Home/HomeScreen";

const AllRoutes = () => {
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
      element: <Products />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
};

export default AllRoutes;
