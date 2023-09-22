import React, { useState } from 'react';
import './App.css';
import BookForm from './bookform';
import BookList from './booklist';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <BookForm addBook={addBook} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
}

export default App;
