import { useState } from 'react';
import { useDispatch } from 'react-redux';

function BookForm() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, {title, author});

    dispatch({ type: 'POST_BOOK', payload: { title, author }}); 
    // {title: title, author: author}
    // if your key values var is the same, you can skip.

    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;