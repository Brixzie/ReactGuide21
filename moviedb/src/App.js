import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GlobalStyle } from './GlobalStyle'


//const Star = () => React.createElement('div', null, 'This is a little star')

function test(){

  const user = {
    username: "dcode",
    age:28,
    active: true,
    friends: ["Matt", "Ange", "Johnny"],
  };

  //let copiedUser = { ...user}; //Shallow copying
  //Same result as above, shallow copying
  //let copiedUser = Object.assign({}, user); //Shallow copying as well

  //Makes a separate copy of the object
  let copiedUser = JSON.parse(JSON.stringify(user));

  console.log(copiedUser.friends[1]);
  console.log(user.username);
  //Will be true for the first 2 cases as the friends array is just a copy of references
  console.log(user === copiedUser);
}

function App() {
  return (
    <div className="App">
      {test()}
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
