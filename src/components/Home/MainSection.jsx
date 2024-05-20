import React from 'react'
import Container from '../common/Container'

function MainSection() {

  return (
    <React.Fragment>
        <div className="text-center text-bold pt-8"><h4>Popular Anime</h4></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 ">
            <React.Fragment><Container/></React.Fragment>
            <React.Fragment><Container/></React.Fragment>
            <React.Fragment><Container/></React.Fragment>
            <React.Fragment><Container/></React.Fragment>
        </div>
    </React.Fragment>
  )
}

export default MainSection
