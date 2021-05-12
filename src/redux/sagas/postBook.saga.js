import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postBook(action) {
    try {
        yield axios.post('/books', action.payload);
        yield put({ type: 'FETCH_BOOKS' })
    } catch (error) {
        console.log('error adding book');
    }
}

export default postBook;