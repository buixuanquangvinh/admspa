import './App.css';
import { useContext } from 'react';
import { PrivateRoute } from 'containers/privateRoute';
import { PublicRoute } from 'containers/publicRoute';
import { AppContext, AppContextProvider } from 'context';

function App() {
  const { appState } = useContext(AppContext)
  return appState.authed?<PrivateRoute/>:<PublicRoute/>
}

export default function AppContainer(){
  return(
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  )
};
