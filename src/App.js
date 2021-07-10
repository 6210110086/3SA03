import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import WordCard from './WordCard';
const sad=()=>{
  return {s:0};
}

function App() {
  const [state, setState] = useState(sad())
  const z=state.s==1? "correct":state.s==2?"Incorrect":""
  const check=value=>{
    setState({s:1})
  }
  const f=()=>{
    setState({s:2})
  }
  return (
    <div>
      <br></br>
       <center><div>รูปภาพนี้คือมังงะเรื่องอะไร?</div></center><br></br>
      <center><img src ="https://sololevelingthailand.com/wp-content/uploads/2021/04/Jogo-e-projeto-live-action-de-Solo-Leveling-1.jpg" width="280px" height="350px"/></center>
      <center><div className="card" onClick={f}>One Piece</div></center>
      <center><div className="card" onClick={f}>Naruto Shippuden</div></center>
      <center><div className="card" onClick={check}>Solo leveling</div></center><br></br>
      <center><div className="card activeCard">{z}</div></center>
    </div>
  );
}

export default App;