import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { history } from "../store";
import Submission from "../views/Submission";
import Review from "../views/Review";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Submission} />
        <Route exact path="/review" component={Review} />
      </Switch>
    </Router>
  );
}
export default Routes;
