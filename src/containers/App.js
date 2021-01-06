import "./App.css";
import React from "react";

// Composantes
import Header from "../components/Header/Header.jsx";

import Footer from "../components/Footer/Footer";
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
