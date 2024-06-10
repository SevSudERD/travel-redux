import {createStore} from 'redux';
import bookingReducer from './bookingReducer.js';

const store = createStore(bookingReducer);

export default store;