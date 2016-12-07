// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to PERN Template</h1>
        </header>
        <div id={style['description-body']}>
        
        </div>
      </div>
    );
  }
}

export default App;
