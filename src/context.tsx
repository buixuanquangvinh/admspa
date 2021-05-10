import { createContext, useReducer } from 'react'

type IAppState = {
  authed:boolean,
  profile: any
}

type IAppAction = {
  login: ()=>void,
  logout: ()=>void,
}

type IAppContext = {
  appState: IAppState,
  appAction: IAppAction
}

const initialState: IAppState = {
    authed: true,
    profile:{}
};

export const appReducer = (state:IAppState = initialState, action:any) => {
  switch (action.type) {
    case "AUTHED":
        return {...state, authed:true}
    case "LOGOUT":
        return {...state, authed:false, profile: {} }
    case "UPDATE_PROFILE":
        return state
    default:
      return state;
  }
};

export const AppContext = createContext({} as IAppContext);

export function AppContextProvider({ children }:any) {
  const [appState,dispatch] =  useReducer(appReducer, initialState)

  function login() {
    dispatch({ type: 'AUTHED' })
  }

  function logout() {
    dispatch({type: 'LOGOUT' })
  }

  const appAction:IAppAction = {
    login:login,
    logout:logout
  }

  const value:IAppContext = {
    appState,
    appAction
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}