import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Tarifs from "./pages/Tarifs";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tarifs" component={Tarifs} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </>
  );
}

export default App;
