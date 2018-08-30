import * as types from '../actions/actionTypes'

const initialState = {
    apiMsg: ''
  };
  
export default function apiUser(state = {initialState}, acttion={}){
    switch(acttion.type){
        case types.API_REQUEST_SEARCH_USER:
        console.log('api request started');
        return{
            ...state,
            apiMsg: 'LOAD USER PROFILE API called succeeded!'
        }

        case types.API_REQUEST_SUCCEEDED_SEARCH_USER:
        console.log('api request success');
        return{
            ...state,
            apiMsg: 'LOAD USER PROFILE API called succeeded!'
        }

        case types.API_REQUEST_FAILED_SEARCH_USER:
        console.log('api request failed');
        return{
            ...state,
        apiMsg: 'LOAD USER PROFILE API called succeeded!'
        }
        default:
        return state;
    }
}