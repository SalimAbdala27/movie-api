import './App.scss';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Info from './components/Info/Info';

function App() {
  const [openInfo, setOpenInfo] = useState(false);
  
  return (
    <div className="App">
      <Nav/>
      {openInfo && <Info/>}
      <button onClick={() => setOpenInfo(prevOpenInfo => !prevOpenInfo)}>OPEN INFO </button>
    </div>
  );
}

export default App;
