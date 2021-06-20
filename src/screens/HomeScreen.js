import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();

  const navigate = (route) => {
    history.push(route);
  };
  return (
    <div>
      <h1>Home Screen</h1>
      <button onClick={() => navigate(ROUTES.ABOUT.route)}>
        {ROUTES.ABOUT.name}
      </button>
    </div>
  );
};

export default HomeScreen;
