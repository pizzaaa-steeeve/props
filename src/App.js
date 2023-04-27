import './App.css';
import React from 'react';
import Profile from './Profile/Profile'

function App() {
  const handleName = (fullName) => {
    alert(` Name:${fullName}`);
  };

  return (
    <Profile
      fullName="Pizzaaa Steeeve"
      bio="MERN Stack Developer"
      profession="web developper"
      image="./src/Profile/steve.png"
      handleName={handleName}
    />
  );
}

export default App;
