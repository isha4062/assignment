import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import './components/style.scss';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
