const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIcecreams : 10
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        orderIcecream : ( state ) => {
            state.numOfIcecreams--
        },
        restockIcecream : (state, action) => {
            state.numOfIcecreams += action.payload
        }
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;