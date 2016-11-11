import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './modules/Home';
import Carousel from './modules/Carousel';
import { Router, Route, hashHistory } from 'react-router';





ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/swipe" component={Carousel}/>
  </Router>
), document.getElementById('root'))