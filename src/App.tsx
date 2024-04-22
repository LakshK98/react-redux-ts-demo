import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;