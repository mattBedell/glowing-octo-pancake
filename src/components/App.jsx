// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import Chart from 'd3';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Walmart Data Search</h1>
        </header>
        <div className="body" id={style['description-body']}>
        <div>
          <section><img className="walmartLogo" src='http://i.imgur.com/HEvo6A0.png' alt="walmart logo"/> </section>
          <section><input className="searchDataInput"type="text" placeholder="Search Data Results"/><button className="buttonSearch">Go!</button></section>
        </div>

        </div>
      </div>
    );
  }
}

export default App;
