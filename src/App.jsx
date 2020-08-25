import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Table from "./components/Table.jsx";

function App() {
  return (
    <div className="App">
    <Header/>     
    <Table />
    <Footer/> 
    </div>
  );
}

export default App;
