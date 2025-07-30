import { useState } from 'react'

import './App.css'


function GameScreen({userGest, compGest}){

  return <><h1>
    🖥️ ▫️ {compGest}
  </h1>
  <h1>
    🧑‍💻 ▫️ {userGest}
  </h1>
  </>
}
function Score({comp, user}){
  return <h1>
    🖥️ {comp}  🆚  {user} 🧑‍💻
  </h1>
}
function WinScreen({userWin, cleanAll}){

  return <div className= 'winScreen'>
{(userWin)?<h1>User win!</h1>: <h1>Comp win!</h1>}
<button onClick={cleanAll}>🔄</button>
  </div>
}
function getCompGest(){
  return ['✊','✋','✌️'][Math.floor(Math.random()*3)];
}



function App() {
  function winScore(gest, comp){
    if ((gest === '✊')&&(comp === '✋')){setCompScore(compScore+1)}
    if ((gest === '✊')&&(comp === '✌️')){setUserScore(userScore+1)}
    if ((gest === '✋')&&(comp === '✌️')){setCompScore(compScore+1)}
    if ((gest === '✋')&&(comp === '✊')){setUserScore(userScore+1)}
    if ((gest === '✌️')&&(comp === '✊')){setCompScore(compScore+1)}
    if ((gest === '✌️')&&(comp === '✋')){setUserScore(userScore+1)}
}
function handleThrow(g){
const gest = g;
          const comp = getCompGest();
          winScore(gest, comp);
          setUserGest(gest);
          setCompGest(comp);
}
  const [userGest, setUserGest] = useState('❓');
  const [compGest, setCompGest] = useState('❓');
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  return (
    <>
    <div>
      {((compScore === 5)||( userScore === 5 )) && <WinScreen userWin={userScore>compScore} cleanAll={()=>{
        setCompGest('❓');
        setUserGest('❓');
        setCompScore(0);
        setUserScore(0);
      }} />}
      <GameScreen compGest = {compGest} userGest = {userGest}/>
        <button onClick={()=>{
          handleThrow('✊');
          }}>✊</button>


        <button onClick={()=>{
           handleThrow('✋');
        
        }}>✋ </button>
        <button onClick={()=>{
          handleThrow('✌️');
          
        }}>✌️ </button>
        <Score comp={compScore} user={userScore}/>
      
      </div>


      
    </>
  )
}

export default App
