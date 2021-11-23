import React, { useState } from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GlobalStyle } from './GlobalStyle'


//const Star = () => React.createElement('div', null, 'This is a little star')



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
