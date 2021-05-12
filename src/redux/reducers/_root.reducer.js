import { combineReducers } from 'redux';
import bookList from './bookList.reducer';

const rootReducer = combineReducers({
    bookList
    // You would add more reducers here!..
});

export default rootReducer;