import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Buttons from './components/Button';

function App(){
  return (
    <>
      <Navbar />

      <Title 
        text="Capychat!"
      />

      <Buttons text="Hangout now! *it's free*" text2="I prefer watching twitch **nerd**" />
    </>
  )
}

export default App;