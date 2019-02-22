import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from  './Header/Header';
import About from './About';
import Movies from './Movies/Movies';
import Movie from './Movies/Movie';
import Bucket from './My/Bucket';
import Seen from './My/Seen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <main className="App-main">
            <Route exact path="/" component={Movies} />
            <Route path="/about" component={About} />
            <Route path="/movie/:imdbID" component={Movie} />
            <Route exact path="/bucket" component={Bucket} />
            <Route exact path="/seen" component={Seen} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
