const axios = require('axios');
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCESSED = 'FETCH_USERS_SUCCESSED';
const thunkMiddleware = require('redux-thunk').default;

const initialState = {
    loading : false, 
    users : [],
    errors : '',
};

const fetchUsersRequested = () => {
    return {
        type : FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccessed = users => {
    console.log(users);
    return {
        type : FETCH_USERS_SUCCESSED,
        payload : users
    }
}

const fetchUsersFailed = errorMessage => {
    return {
        type : FETCH_USERS_FAILED,
        payload : errorMessage
    }
}

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case fetchUsersRequested : 
            return {
                ...state,
                loading : true
            }
        case fetchUsersSuccessed : 
            return {
                ...state,
                loading : false,
                users : action.payload,
                errors : ''
            }
        case fetchUsersFailed : 
            return {
                ...state,
                loading : false,
                users : [],
                errors : action.payload
            }
        default: 
            return state;
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequested());
        axios.get('https://jsonplaceholder.typicode.com/users').then( res => {
            const users = response.data.map(user => user.id);
            console.log(users);
            dispatch(fetchUsersSuccessed(users));
        }).catch(error => {
            dispatch(fetchUsersFailed(error.message));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());