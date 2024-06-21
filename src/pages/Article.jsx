import React,{ createContext,useState} from 'react'
import Navbar from '../components/common/Navbar'
import Contact from '../components/common/Contact'

function Article() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-cyan-600 to-green-400 text-center">
        </div>
        <Contact/>
    </React.Fragment>
  )
}

export default Article
