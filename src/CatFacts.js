import React, { useState, useEffect } from 'react';
import './App.css';



function CatFacts() {

    const [catInfo, setCatInfo] = useState([]);

useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts?number=3')
    .then(response => response.json())
    .then(data => setCatInfo(data.facts))
    .catch(error => console.log(error));
    console.log(catInfo);
}, [])

const handleRefresh = () => {
    window.location.reload();
}


return (
    <div className="container">
    <div className="content">
      <h1 className="title">Random Cat Facts</h1>
      <ul className='list'>
        {catInfo.map((text, index) => (
          <li className="item" key={index}>
            {text}
          </li>
        ))}
      </ul>
      <button className='button' onClick={handleRefresh}>Give me more facts!</button>
    </div>
  </div>
 );
}

export default CatFacts;