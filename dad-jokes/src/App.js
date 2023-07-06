import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';
import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
  const url = 'https://icanhazdadjoke.com/'
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        Accept: "application/json",
    },
  })
      .then(response => response.json())
      .then(data => setJoke(data.joke))
      .catch(err => console.log("you broke it!", err));
  }, []);


  const getNewJoke = () => {
    fetch(url, {
        headers: {
          Accept: "application/json",
      },
    })
        .then(response => response.json())
        .then(data => setJoke(data.joke))
        .catch(err => console.log("you broke it!", err))
}

  // console.log(joke);


    return (
      <div className="App">
        <Header />
        <Joke joke={joke}/>
        <Button click={getNewJoke} />
      </div>
    );
  }

export default App;
