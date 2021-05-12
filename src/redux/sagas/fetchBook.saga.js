import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBooks() {
    try {
        // YIELD - yield makes us wait until the async thing (axios) is done
        // Keep the response in a var to access later
        const response = yield axios.get('/books');
        // When it's done successfully then 'dispatch' the action to set reducer
        yield put({ type: 'SET_BOOK_LIST', payload: response.data });
    } catch (error) {
        console.log(`error on get request`, error);
        alert('hello from the fetch books saga - could not get that data! Sorry!', error);
    }
}

export default fetchBooks;