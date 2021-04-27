import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from 'pages/dashboard'

export function PrivateRoute() {
  return (
    <Router>
      <Switch>
        <Route path={'/dashboard'} exact={true} component={Dashboard}/>
      </Switch>
    </Router>
  );
}
