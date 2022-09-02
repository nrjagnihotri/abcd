import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducers";
const compose = composeWithDevTools({

});
const initialStore = {
    cartReducer: {
        cartItem: JSON.parse(localStorage.getItem('cartItem')) ?? []
    },
    orderReducer: {
        order: JSON.parse(localStorage.getItem('order')) ?? []
    },

}






const store = createStore(rootReducer, initialStore, compose());
export default store;