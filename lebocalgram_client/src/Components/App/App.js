import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import ProfilPage from "../ProfilPage/ProfilPage";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Contenu s'affichant en permanance */}

        {/* Affichage conditionnel des composant servant de "page" */}
        <Switch>
          {/* Route de la page login */}
          <Route path="/login">
            <LoginPage />
          </Route>
          {/* Route de la page personnelle*/}
          <Route path="/profil">
            <ProfilPage />
          </Route>

          {/* Route de la page d'accueil */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
