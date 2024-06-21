import React,{ createContext,useState,useEffect } from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Latest from './pages/Latest';
import Top from './pages/Top';
import Article from './pages/Article';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter> 
          <Routes> 
            <Route Index element={<Home/>}/> 
            <Route path="/" element={<Home/>}/>
            <Route path="/latest" element={<Latest/>}/>
            <Route path="/top" element={<Top/>}/>
            <Route path="/article" element={<Article/>}/>
          </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
