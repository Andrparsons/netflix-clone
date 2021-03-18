import react from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>Sign in page</p>
        </Route>
        <Route path="/signup">
          <p>Sign up page</p>
        </Route>
        <Route path="/browse">
          <p>Browse Page</p>
        </Route>
        <Route path="/">
          <p>Application</p>
        </Route>
      </Switch>
    </Router>
  );
}
