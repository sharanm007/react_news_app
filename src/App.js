import React, { Component } from 'react';
import classes from './App.css';
import {BrowserRouter} from 'react-router-dom'
import './FontAwesoneIcons/Fontawesome'
import Layout from './Layout/Layout'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
