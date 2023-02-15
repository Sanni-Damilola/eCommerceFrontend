import React from "react";
import { useRoutes } from "react-router";
import HomeScreen from "../Home/HomeScreen";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return element;
};

export default Routes;
