import React, { useState, useEffect } from 'react';
import './App.css';



function App() { 
  const [animeFacts, setAnimeFacts] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    // .then(quote => console.log(quote))
    .then(data => setAnimeFacts(data.quote))
      .catch(error => console.log(error));
      console.log(animeFacts);
  }, [])
  
  const handleRefresh = () => {
      window.location.reload();
  }
  
  
  return (
      <div className="container">
      <div className="content">
        <h1 className="title">Random Anime Facts</h1>
        <ul className='list'>
          {animeFacts.map((quote, index) => (
            <li className="item" key={index}>
              {quote}
            </li>
          ))}
        </ul>
        <button className='button' onClick={handleRefresh}>Give me more facts!</button>
      </div>
    </div>
   );
  }

export default App;
