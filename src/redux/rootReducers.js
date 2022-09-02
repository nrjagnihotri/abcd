import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    orderReducer: orderReducer

})
export default rootReducer;