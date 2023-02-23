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
        text="capychat!" 
        subtitle="Here on Capychara chat, we enjoy chatting with people, just imaging talking about capybaras, so fun! this website is more like a humor than a site you should use in your daily life"
      />

      <Buttons text="Hangout now! *it's free*" text2="Let me just simp in the last girl" />
    </>
  )
}

export default App;