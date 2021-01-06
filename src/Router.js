import React from "react";
import { Switch, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import About from "./pages/About/About";
import ConditionsUtilisation from "./pages/About/ConditionsUtilisation";
import PolitiquesConfidentialite from "./pages/About/PolitiquesConfidentialite";
import Tarifs from "./pages/Tarifs";
import Nouvelles from "./pages/Nouvelles";
import FaQ from "./pages/FaQ";
import Error404 from "./pages/Error404/Error404";
import NousJoindre from "./pages/NousJoindre";

const Router = () => {
  return (
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
      <Route exact path="/nouvelles" component={Nouvelles} />
      <Route exact path="/comment-ca-marche" component={FaQ} />
      <Route exact path="/contact" component={NousJoindre} />
      <Route component={Error404} />
    </Switch>
  );
};

export default Router;
