import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [isBlue, setIsBlue] = useState(false);

  const handleClick = () => {
    setIsBlue(!isBlue);
  };
  
  return (
     <div className="App">
      <button id="button" onClick={handleClick}>Change Style</button>
      <p className={isBlue ? 'blueColor' : 'redColor'}>This is some text.</p>
    </div>
  )
}


export default App;
