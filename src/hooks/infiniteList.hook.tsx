import { useReducer, useEffect } from 'react';
import { api } from 'api';

type IInfiniteListState = {
  page:number,
  list:Array<any>,
  hasMore:boolean,
  loading:boolean
}

type IInfiniteList = {
  infiniteListState:IInfiniteListState
  infiniteListAction:{
    loadMore: () => void;
    refresh: () => void;
  }
}

const initialState: IInfiniteListState = {
    page:0,
    list:[],
    hasMore:true,
    loading:false,
};

function reducer(state = initialState, action:any) {
  switch (action.type) {
    case 'LOAD_FROM_CACHE':
      return {...action.payload,loading:false}
    case 'REFRESH':
      return {...state,page:0,list:[],hasMore:true}
    case 'REFRESH_SUCCESS':
      return {...state,
        loading:false,
        page:state.page+1, 
        list:action.payload.data, 
        hasMore:action.payload.hasMore
      }
    case 'LOAD_MORE':
        return {...state,loading:true}
    case 'LOAD_MORE_SUCCESS':
        return {...state,
          loading:false,
          page:state.page+1, 
          list:state.list.concat(action.payload.data), 
          hasMore:action.payload.hasMore
        }
    default:
      return state
  }
}

export function useInfiniteList(url:string,cacheKey:string=''):IInfiniteList {
  const [infiniteListState,dispatch] =  useReducer(reducer, initialState)

  useEffect(()=>{
    let jsonState = sessionStorage.getItem(cacheKey)
    if(cacheKey && jsonState)
      dispatch({ type: 'LOAD_FROM_CACHE', payload: JSON.parse(jsonState) })
    else
      loadMore()
  },[])

  useEffect(()=>{
    if(cacheKey && infiniteListState.page!=0)
      sessionStorage.setItem(cacheKey,JSON.stringify(infiniteListState))
  },[infiniteListState.list.length])

  function loadFromCache(cacheState:any){
    dispatch({ type: 'LOAD_FROM_CACHE', payload: cacheState })
  }

  async function refresh(){
    if(!infiniteListState.loading){
      dispatch({ type: 'REFRESH' })
    }
  }

  async function loadMore(){
    if(infiniteListState.hasMore && !infiniteListState.loading){
      dispatch({ type: 'LOAD_MORE' })
    }
  }

  const infiniteListAction = {
    loadMore,
    refresh
  }
  
  return { infiniteListState, infiniteListAction }
}