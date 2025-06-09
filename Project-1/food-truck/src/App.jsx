import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header/>
      </div>
      <List />
    </div>
  );
};

export default App
