import React from "react";
import { useRoutes } from "react-router-dom";
import HomeComp from "../Home/homeComp";


export const AllRoute = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeComp /> 
        },
        // {
        //     path: "/details",
        //     element: <Detail /> 
        // },
    ])

    return element
} 