import React from "react";
import { AllRoute } from "./Components/allRoute/allRoutes";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import Register from "./Components/Register/Register";

import { useQuery } from "@tanstack/react-query";
import { getOneUser } from "./Api/Api";
import { useParams } from "react-router-dom";

function App() {
  const { id } = useParams();

  const readData = useQuery({
    queryKey: ["data", id],
    queryFn: getOneUser,
  });
  console.log("here", readData?.data);

  return (
    <div>
      <Header />
      {/* <AllRoute /> */}
      {/* <Footer /> */}
      <Register />
    </div>
  );
}

export default App;
