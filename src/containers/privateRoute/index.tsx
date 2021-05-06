import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from 'pages/dashboard'
import { OverView } from 'pages/overview'

export function PrivateRoute() {
  return (
    <Router>
      <Switch>
        <Route path={'/dashboard'} exact={true} component={Dashboard}/>
        <Route path={'/overview'} exact={true} component={OverView}/>
      </Switch>
    </Router>
  );
}
