const axios = require('axios');
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FETCH_USER_SUCCESSED = 'FETCH_USER_SUCCESSED';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const fetchUserRequested = () => {
    return {
        type : FETCH_USER_REQUESTED
    }
}

const fetchUserSuccess = ( users ) => {
    return {
        type : FETCH_USER_SUCCESSED,
        payload : users
    }
}

const fetchUserFailed = ( errorMessage ) => {
    return {
        type : FETCH_USER_FAILED,
        payload : errorMessage
    }
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUESTED : 
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESSED : 
            return {
                loading : false,
                users : action.payload,
                error : ''
            }
        case FETCH_USER_FAILED : 
            return {
                loading : false,
                users : [],
                error : action.payload
            }
        default : 
            return state;
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequested);
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data.map(user => user.id);
            dispatch(fetchUserSuccess(users));
        }).catch((error) => {
            dispatch(fetchUserFailed(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());