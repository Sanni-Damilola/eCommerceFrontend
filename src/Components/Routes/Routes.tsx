import React from "react";
import { useRoutes } from "react-router";
import Explore from "../Explore/Explore";
import HomeScreen from "../Home/HomeScreen";
import Men from "../Men/Men";
import Sport from "../Sport/Sport";
import Templates from "../Templates/Templates";
import Women from "../Women/Women";

const Routes = () => {
  const element = useRoutes([
    // {
    //   path: "/",
    //   element: <Men />,
    // },
    // {
    //   path: "/women",
    //   element: <Women />,
    // },
    // {
    //   path: "/beauty",
    //   element: <Sport />,
    // },
    // {
    //   path: "/templates",
    //   element: <Templates />,
    // },
    // {
    //   path: "/explore",
    //   element: <Explore />,
    // },
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return element;
};

export default Routes;
