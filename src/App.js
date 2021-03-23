import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>Sign in page</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>Sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>Browse Page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
