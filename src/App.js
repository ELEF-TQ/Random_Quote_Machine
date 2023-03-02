
import pauseMobile from './images/pattern-divider-mobile.svg'
import pauseDesktop from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import { useState,useEffect } from 'react';

function App() {
  const [Quote,setQuote] = useState([])
  const fetchAdvice = async()=>{
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data)
    setQuote(data.slip)
  }
  useEffect(()=>{
     fetchAdvice()
  },[])

    return (
      <div className="container">
       <h1>Quote #{Quote.id}</h1>
       <p>{Quote.advice}</p>
       <picture>
        <source media='(min-width : 768px)' srcSet={pauseDesktop}></source>
        <img src={pauseMobile} />
       </picture>
      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} />
        </button>
      </div>
      </div>
    );
  }


export default App;
