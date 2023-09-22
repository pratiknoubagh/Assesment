import React, { useState } from 'react';
function BookForm({ addBook }) {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    publication: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(bookData);
    setBookData({
      title: '',
      author: '',
      publication: '',
      price: '',
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Name of the Book:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <label htmlFor="author" className="col-sm-2 col-form-label">
            Author:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              name="author"
              className="form-control"
              id="author"
              value={bookData.author}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="publication" className="col-sm-2 col-form-label">
            Publication:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              name="publication"
              className="form-control"
              id="publication"
              value={bookData.publication}
              onChange={handleInputChange}
              required
            />
          </div>
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Price:
          </label>
          <div className="col-sm-4">
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
              value={bookData.price}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 text-center">
            <button type="submit" className="btn btn default">
              Add a Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
