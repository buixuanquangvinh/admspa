import { useReducer, useContext } from 'react';

type IPageState = {
  username:string,
  userNameError:string,
  password:string,
  passwordError:string,
  loading:boolean
};

type IPageAction = {
  type:string,
  payload?:any
};

type IPageReducer = {
  pageState:IPageState,
  pageAction:{
    login:()=>void,
    changeUserName:(event:any)=>void,
    changePassword:(event:any)=>void
  }
}

const initialState:IPageState = {
  username:'',
  userNameError:'',
  password:'',
  passwordError:'',
  loading:false
};

function reducer(state = initialState, action:IPageAction) {
  switch (action.type) {
    case 'LOGIN':
      return {...state,loading:true }
    case 'LOGIN_FAIL':
      return {...state,loading:false }
    case 'CHANGE_USER_NAME':
      return {...state, username: action.payload, userNameError:''};
    case 'CHANGE_PASSWORD':
      return {...state, password: action.payload, passwordError:'' };
    default:
      return state
  }
}

export function usePageReduce():IPageReducer{
  const [pageState,dispatch] =  useReducer(reducer,initialState)

  async function login() {
    dispatch({ type: 'LOGIN' })
    let data = {
      username:pageState.username,
      password:pageState.password
    }
    try{
      //let result = await api('login',{ method:'POST', body: data})
      localStorage.setItem('token','tokentest')
    }catch(err){
      dispatch({ type: 'LOGIN_FAIL' })
    }
  }

  function changeUserName(event:any){
    dispatch({ type: 'CHANGE_USER_NAME', payload:event.target.value })
  }

  function changePassword(event:any){
    dispatch({ type: 'CHANGE_PASSWORD', payload:event.target.value })
  }

  return {
    pageState,
    pageAction:{
      login,
      changeUserName,
      changePassword
    },
  }

}