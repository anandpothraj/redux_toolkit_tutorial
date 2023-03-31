const store = require('./app/store');
const fetchUsers = require('./features/user/userSlice').fetchUsers;
// const cakeActions = require('./features/cake/cakeSlice').cakeActions;
// const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;

console.log("Initial State : ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated State : ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.orderCake());
// store.dispatch(icecreamActions.orderIcecream());
// store.dispatch(cakeActions.restockCake(6));
// store.dispatch(icecreamActions.restockIcecream(6));
// unsubscribe(); 