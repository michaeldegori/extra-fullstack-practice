import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Home from './components/Home';
import AddBook from './components/AddBook';

function App() {

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="add-book">Add Book</Link>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/books" render={(props) => <Books {...props} />} />
        <Route exact path="/add-book" render={(props) => <AddBook {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
