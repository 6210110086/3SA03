import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      {
       <WordCard value="Hello"/>
      }
    </div>
  );
}

export default App;
