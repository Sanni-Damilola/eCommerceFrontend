import React from "react";
import { useRoutes } from "react-router";
import Explore from "../Explore/Explore";
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
