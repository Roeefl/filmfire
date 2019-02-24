import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from  './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import About from './About';
import Featured from './Movies/Featured';
import Movies from './Movies/Movies';
import Movie from './Movies/MoviePage/Movie';
import Bucket from './My/Bucket';
import Seen from './My/Seen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <Header />
          </header>
          <main className='App-main'>
            <aside className='App-sidebar'>
              <Sidebar />
            </aside>
            <section className='App-content'>
              <Route exact path='/' component={Featured} />
              <Route path='/movies' component={Movies} />
              <Route path='/about' component={About} />
              <Route path='/movie/:imdbID' component={Movie} />
              <Route exact path='/bucket' component={Bucket} />
              <Route exact path='/seen' component={Seen} />
            </section>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
