import React, {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const COLOURS = ["green", "red", "blue"];
  //const [colour, setColour] = useState("green");
  const [count, setCount] = useState(0);
  useEffect(() => {
      setInterval(() => {
        //setCount(count > COLOURS.length-1 ? 0 : count+1);
        setCount(count => (count + 1))
        console.log(count);
      }, 3000);
  }, []);
  return (
    <div className="App" style = {{backgroundColor:COLOURS[count]}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a webpage for CMK Jewellery
        </p>
        <a
          className="App-link"
          href="https://www.cmkjewellery.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
            className="App-link"
            href="https://www.instagram.com/cmkjewellery/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
            className="App-link"
            href="https://ncad.works/graduates/clodagh-mckenna"
            target="_blank"
            rel="noopener noreferrer"
        >
          NCAD Graduate Show
        </a>
      </header>
    </div>
  );
}

export default App;
