import React from "react";
import Accueil from "./accueil/Accueil";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Accueil} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
