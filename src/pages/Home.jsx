import React from 'react'
import Navbar from '../components/common/Navbar'
import MainSection from '../components/Home/MainSection'

function Home() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-cyan-600 to-green-400"><MainSection/></div>
    </React.Fragment>
  )
}

export default Home
