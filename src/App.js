import './App.css';
import React from 'react';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Homescreen/Home';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Routes> 
          <Route  path="/" element={<Home />} />
          <Route  path="*" element={ <div>  404 Not found</div>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
