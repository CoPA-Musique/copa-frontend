import "./App.css";
import React from "react";

// Composantes
import Header from "../components/organismes/Header/Header.jsx";
import Footer from "../components/organismes/Footer/Footer";

import Router from "../Router";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
