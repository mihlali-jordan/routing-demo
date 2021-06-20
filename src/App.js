import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Import screens */
import AboutScreen from "./screens/AboutScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

/* Import constants */
import { ROUTES } from "./constants";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME.route} component={HomeScreen} />
        <Route path={ROUTES.LOGIN.route} component={LoginScreen} />
        <Route path={ROUTES.ABOUT.route} component={AboutScreen} />
        <Route path={ROUTES.CONTACT.route} component={ContactScreen} />
      </Switch>
    </Router>
  );
};

export default App;
