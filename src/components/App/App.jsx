import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  // GET Book List from server as we load
  useEffect(() => {
    fetchBookList();
  })

  const fetchBookList = () => {
    axios.get('/books')
    .then( response => {
      // send to reducer
      dispatch({ type: 'SET_BOOK_LIST', payload: response.data });
    })
    .catch( error => {
      console.log(`error on get request`, error);
    })
  }

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;