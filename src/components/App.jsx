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
          <section>
            Is It A Holiday?
            <select>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </section>

          <section>
            Store Type?
            <select>
              <option value="A">Type A</option>
              <option value="B">Type B</option>
              <option value="C">Type C</option>
            </select>
          </section>


           <section>
            Weekly Sales:
            <input type="text" placeholder="$ Total Weekly Sales"/>
          </section>

          <section>
            Temp:
            <input className=""type="text" placeholder="0&deg;"/>
          </section>


        </div>
        </div>
      </div>

    );
  }
}

export default App;
