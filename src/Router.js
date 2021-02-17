import React from "react";
import {Switch, Route} from "react-router-dom";

import Accueil from "./components/templates/Accueil";
import About from "./components/templates/About/About";
import ConditionsUtilisation from "./components/templates/About/ConditionsUtilisation";
import PolitiquesConfidentialite from "./components/templates/About/PolitiquesConfidentialite";
import Tarifs from "./components/templates/Tarifs";
import Nouvelles from "./components/templates/Nouvelles";
import FaQ from "./components/templates/FaQ";
import Error404 from "./pages/Error404/Error404";
import NousJoindre from "./components/templates/NousJoindre";
import Connexion from "./components/templates/Account/Connexion";
import CreateAccount from "./components/templates/Account/CreateAccount";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Accueil}/>
            <Route exact path="/about" component={About}/>
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
            <Route exact path="/tarifs" component={Tarifs}/>
            <Route exact path="/nouvelles" component={Nouvelles}/>
            <Route exact path="/comment-ca-marche" component={FaQ}/>
            <Route exact path="/contact" component={NousJoindre}/>

            {/* Account */}
            <Route exact path="/login" component={Connexion}/>
            <Route exact path="/register" component={CreateAccount}/>

            <Route component={Error404}/>
        </Switch>
    );
};

export default Router;
