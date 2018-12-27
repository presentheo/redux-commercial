import { combineReducers } from 'redux';
import {product} from './product';
import {cart} from './cart';
import {drawer} from './drawer';

const reducers = combineReducers({
  product, cart, drawer
})

export default reducers;