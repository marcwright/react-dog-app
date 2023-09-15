import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [dog, setDog] = useState({});
  const getDog = async () => {
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let response = await data.json();
    setDog(response);
    console.log(response);
  };
  return (
    <div className="container">
      <h1>Dog API</h1>
      <button className="btn waves-effect waves-light" onClick={getDog}>
        Get Dog
      </button>
      <br />
      {/* {dog.message ? <img src={dog.message} /> : ''} */}
      <img
        className="materialboxed"
        src={
          dog.message
            ? dog.message
            : 'https://marcwright.github.io/marcwright-jekyll/images/marc_diesel.jpg'
        }
      />
    </div>
  );
}
