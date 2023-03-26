const redux = require('redux');
const UPDATE_STREET = 'UPDATE_STREET';
const createStore = redux.createStore;
const produce = require('immer').produce;

function updateStreet(street){
    return{
        type : UPDATE_STREET,
        payload : street,
    }
}

const initialState = {
    name : 'Anand',
    address : {
        street : '234 Panther Nagar',
        city : 'Mumbai',
        state : 'Maharashtra'
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STREET: 
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
        default : {
            return state
        }
    };
};

const store = createStore(reducer);
console.log("Initial state : ", store.getState());
const unsubcribe = store.subscribe(() => {
    console.log('Updated store', store.getState());
});
store.dispatch(updateStreet("123 Kannamwar nagar 1"));
unsubcribe();