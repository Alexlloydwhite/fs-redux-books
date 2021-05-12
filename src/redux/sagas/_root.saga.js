import { takeEvery } from 'redux-saga/effects';
import fetchBooks from './fetchBook.saga';
import postBook from './postBook.saga';

//  Saga setup 2 - make the watcher function - name is a taco
// * makes this a "generator function" (more on this l8r)
function* watcherSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
    yield takeEvery('POST_BOOK', postBook);
    // You would put additional sagas here...
}

export default watcherSaga;