import React from 'react'
import Navbar from '../components/common/Navbar'
import MainSection from '../components/Home/MainSection'
import Contact from '../components/common/Contact'

function Home() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-sky-400 to-green-500"><MainSection/></div>
        <Contact/>
    </React.Fragment>
  )
}

export default Home
