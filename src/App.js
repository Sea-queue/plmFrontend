import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import NewPilot from './NewPilot';
import DataRevise from './DataRevise';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newPilot' element={<NewPilot/>}/>
        <Route path='/dataRevise' element={<DataRevise/>}/>
      </Routes>
    </div>
  );
}

export default App;
