import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const listBooks = () => {
    return books.map(book => {
      return (
        <div>
          <h1>{book.title}</h1>
          <img src={book.image_url} alt="" />
        </div>
      )
    })
  }

  return (
    <div>
      {listBooks()}
    </div>
  );
};

export default Books;