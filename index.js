const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;

const unsubscribe = store.subscribe(() => {
    console.log("Updated Store : ", store.getState());
})

store.dispatch(cakeActions.orderCake());
store.dispatch(icecreamActions.orderIcecream());
store.dispatch(cakeActions.restockCake(6));
store.dispatch(icecreamActions.restockIcecream(6));
unsubscribe();