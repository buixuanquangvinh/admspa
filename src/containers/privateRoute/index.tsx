import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { Dashboard } from 'pages/dashboard'
import { OverView } from 'pages/overview'
import { AppHeaderComponent } from 'components/app-header'
import { AppFooterComponent } from 'components/app-footer'

export function PrivateRoute() {
  return (
    <Router>
      <Switch>
        <Route path={'/dashboard'} exact={true}  render={props =><LayoutComponent><OverView {...Dashboard} /></LayoutComponent>}/>
        <Route path={'/overview'} exact={true} render={props =><LayoutComponent><OverView {...props} /></LayoutComponent>} />
      </Switch>
    </Router>
  );
}

function LayoutComponent(props:any){
  return(
    <div>
      <div style={{position:'fixed',top:'0',width:'100%'}}>
        <AppHeaderComponent/>
      </div>
      <div style={{height:'calc(100vh - 8rem)',margin:'4rem 0',paddingTop:'40px'}}>{props.children}</div>
      <div style={{position:'fixed',bottom:'0',width:'100%'}}>
        <AppFooterComponent/>
      </div>
    </div>
  )
}
