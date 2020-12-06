import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AddBook = () => {

  const [book, setBook] = useState();

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value
    });
  }

  const addBook = (event) => {
    event.preventDefault();

    Axios
      .post('http://localhost:3000/book')
      .then(res => {
        console.log("Movie created from React!")
          .catch(err => console.log(err));
      })
  }

  return (
    <div>
      <form onSubmit={addBook}>
        <input type="text" name="image-url" placeholder="img url" value={book.image_url} onChange={handleChange} />
        <input type="text" name="title" placeholder="title" value={book.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="desc" value={book.description} onChange={handleChange} />
        <input type="number" name="rating" placeholder="rtng" value={book.rating} onChange={handleChange} />
        <input type="date" name="created-at" placeholder="created" value={book.createdAt} onChange={handleChange} />
        <input type="number" name="version" placeholder="version" value={book._v} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;