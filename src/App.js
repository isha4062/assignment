import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import './components/style.scss';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <Routes>
    <div className='main'>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
    </div>
    </Routes>
  );
}

export default App;
