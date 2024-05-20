import React,{ createContext,useState,useEffect } from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter> 
          <Routes> 
            <Route Index element={<Home/>}/> 
            <Route path="/" element={<Home/>}/>
          </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
