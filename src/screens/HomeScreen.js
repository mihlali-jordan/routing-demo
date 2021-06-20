import React from "react";
import { ROUTES } from "../constants";
// import { useHistory } from "react-router-dom";

/* Reach router imports */
import { useNavigate, useLocation } from "@reach/router";

const HomeScreen = () => {
  // const history = useHistory();

  // const navigate = (route) => {
  //   history.push(route);
  // };

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

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
