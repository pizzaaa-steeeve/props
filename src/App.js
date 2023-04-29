import './App.css';
import React from 'react';
import Profile from './Profile/Profile'

function App() {
  const handleName = (fullName) => {
    alert(` Name:${fullName}`);
  };

  return (
    <div className="main>
        <Profile
      fullName="Pizzaaa Steeeve"
      bio="MERN Stack Developer"
      profession="web developper"
      image="./src/Profile/steve.png"
      handleName={handleName}
    />
    </div>
  );
}

export default App;
