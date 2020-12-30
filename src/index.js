import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './Components/Header'

import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter para alterar as paginas

import Home from './Components/Home/Home';
import Questions from './Components/Test/Questions'


ReactDOM.render(
  <BrowserRouter>
    
    <Header />
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Questions" component={Questions} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
