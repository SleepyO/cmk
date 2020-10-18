import React, {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';

const COLOURS = ["green", "red", "blue", "yellow"];

function App() {
  const [values, setValues] = useState({
    count: 0,
  });
  const s = {backgroundColor: `${COLOURS[values.count]}`};
  useEffect(() => {
    setInterval(() => {
      setValues(prevState => ({count: prevState.count >= COLOURS.length - 1 ? 0 : prevState.count + 1}))
    }, 50);
  }, [setValues]);

  return (
    <div
      className="App"
      style={s}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
