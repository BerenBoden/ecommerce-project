import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components/Navigation';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import NoMatch from './components/NoMatch';
import Contact from './components/Contact';
import Home from './components/Home';
import Modal from './components/Modal';

export const App = () => (
  <React.Fragment>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
    <Modal />
  </React.Fragment>
)
