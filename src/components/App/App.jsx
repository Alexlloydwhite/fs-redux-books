import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  // GET Book List from server as we load
  useEffect(() => {
    // TODO -- Replace this function with a dispatch action
    dispatch( {type: 'FETCH_BOOKS'} )
  }, [])

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;