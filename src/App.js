import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import MyForm from './Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}
    >
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
      <Routes>
      <Route path="/myform" element={MyForm} />

      </Routes>
    </Router>
  );
};


export default App;
