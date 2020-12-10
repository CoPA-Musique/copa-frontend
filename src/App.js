import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Accueil} />
      </Switch>
    </>
  );
}

export default App;
