import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from 'pages/login'

export function PublicRoute() {
  return (
    <div className="container">
      <Router>
        <Switch>
            <Route path={'/login'} exact={true} component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}
