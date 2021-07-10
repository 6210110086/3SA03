import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';

const word = "Hello1";
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
