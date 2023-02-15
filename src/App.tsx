import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
