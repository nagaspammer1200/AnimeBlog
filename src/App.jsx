import React,{ createContext,useState,useEffect } from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Latest from './pages/Latest';
import Top from './pages/Top';
import Article from './pages/Article';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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
            <Route path="/privacypolicy" element={<Privacy/>}/>
            <Route path="/termsandconditons" element={<Terms/>}/>
          </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
