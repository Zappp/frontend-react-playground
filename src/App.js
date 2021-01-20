import React from 'react';
import './App.css';
import Nav from './Nav';
import page1 from './page1';
import page2 from './page2';


import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/page1" component={page1} />
          <Route path="/page2" component={page2} />
        </Switch>
      </div>
    </Router>
  );
}
  
export default App;