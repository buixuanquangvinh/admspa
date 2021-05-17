import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { AppContext, AppContextProvider } from 'context';
// components
import { AppHeaderComponent } from 'components/app-header'
import { AppFooterComponent } from 'components/app-footer'
// pages
import { Dashboard } from 'pages/dashboard'
import { OverView } from 'pages/overview'
import { EmergencyService } from 'pages/emergency';
// constants
import { routes } from 'constants/index'

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

function App() {
  const { appState } = useContext(AppContext)
  return(
    <Router>
      <Switch>
        <Route path={routes.DASHBOARD} exact={true}  render={(props)=><Dashboard/>}/>
        <Route path={routes.EMERGENCY_SERVICE} exact={true}  render={(props)=><EmergencyService/>}/>
        <Route path={routes.OVERVIEW} exact={true} render={props =><LayoutComponent><OverView {...props} /></LayoutComponent>} />
      </Switch>
    </Router>
  )
}

export default function AppContainer(){
  return(
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  )
};
