// const reduxLogger = require('redux-logger');
const userReducer = require('../features/user/userSlice');
const cakeReducer = require('../features/cake/cakeSlice');
const configureStore = require('@reduxjs/toolkit').configureStore;
const icecreamReducer = require('../features/icecream/icecreamSlice');

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
    // middleware : ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger)
});

module.exports = store;