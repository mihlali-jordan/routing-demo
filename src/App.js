import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Reach router */
import { Router } from "@reach/router";

/* Import screens */
import AboutScreen from "./screens/AboutScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

/* Import constants */
import { ROUTES } from "./constants";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME.route} component={HomeScreen} />
        <Route path={ROUTES.LOGIN.route} component={LoginScreen} />
        <Route path={ROUTES.ABOUT.route} component={AboutScreen} />
        <Route path={ROUTES.CONTACT.route} component={ContactScreen} />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Router>
      <HomeScreen path={ROUTES.HOME.route} />
      <LoginScreen path={ROUTES.LOGIN.route} />
      <AboutScreen path={ROUTES.ABOUT.route} />
      <ContactScreen path={ROUTES.CONTACT.route} />
    </Router>
  );
};

export default App;
