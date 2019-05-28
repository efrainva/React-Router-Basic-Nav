import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

import {Route} from 'react-router-dom';

const App = (props) => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}/>
  </div>
);

export default App;
