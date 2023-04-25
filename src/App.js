import React, { useState, useEffect } from 'react';
import './App.css';



function App() { 
  const [animeQuotes, setAnimeQuotes] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => setAnimeQuotes(data.quote))
      .catch(error => console.log(error));
      console.log(animeQuotes);
  }, [])
  
  const handleRefresh = () => {
      window.location.reload();
  }
  
  
  return (
      <div className="container">
      <div className="content">
        <h1 className="title">Random Anime Quotes</h1>
        
        <ul className='list'>
        {animeQuotes}
          {/* {animeFacts.map((quote, index) => (
            <li className="item" key={index}>
              {quote}
            </li>
          ))} */}
        </ul>
        <button className='button' onClick={handleRefresh}>Give me more facts!</button>
      </div>
    </div>
   );
  }

export default App;
