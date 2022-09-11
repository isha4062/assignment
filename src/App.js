import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import './components/style.scss';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className='main'>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
