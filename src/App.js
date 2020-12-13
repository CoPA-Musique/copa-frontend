import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Accueil from "./pages/Accueil";
import About from "./pages/About/About";
import ConditionsUtilisation from "./pages/About/ConditionsUtilisation";
import PolitiquesConfidentialite from "./pages/About/PolitiquesConfidentialite";
import Tarifs from "./pages/Tarifs";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/conditions-utilisation"
          component={ConditionsUtilisation}
        />
        <Route
          exact
          path="/politiques-confidentialite"
          component={PolitiquesConfidentialite}
        />
        <Route exact path="/tarifs" component={Tarifs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </>
  );
}

export default App;
