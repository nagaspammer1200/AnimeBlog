import React,{ createContext,useState,useEffect } from 'react'

function News({Image,Title,Date,Author,Summary,Alt,SteamLink,Tag}) {
    const [makeVisible,setMakeVisible] = useState(false)
    const makeVisibleRead = () => {
        setMakeVisible(true)
    }
    const makeVisibleShow = () => {
        setMakeVisible(false)
    }

  return (
    <React.Fragment>
        <div className="flex-row sm:flex sm:flex-col p-12">
            <div><img src={Image} alt={Alt} height="300px" width="300px"/></div>
            <div className={makeVisible?"bg-sky-400 text-center p-3 ml-0 sm:ml-48 mt-8":"text-center pl-0 sm:pl-48 mt-8"}>
                <div className="mb-2 font-bold"><h2>{Title}</h2></div>
                <div className={makeVisible?"hidden":"flex justify-between mb-16 text-sm font-semibold"}>
                    <div>{Date}</div>
                    <div>{Author}</div>
                </div>
                <div className={makeVisible?"hidden":"bg-black text-white text-sm m-4 p-1 max-w-24 rounded"}>{Tag}</div>
                <div className={makeVisible?"hidden":"block bg-sky-600 text-white p-2 max-w-24 rounded"} onClick={makeVisibleRead}>Read More</div>
                <div className={makeVisible?"block max-w-96 text-left sm:mt-8 font-semibold":"hidden"}><p><i>{Summary}</i><br /><br />More Information can be found <a href={SteamLink}>Here</a></p></div>
                <div className={makeVisible?"block bg-sky-600 text-white p-2 max-w-24 rounded":"hidden"} onClick={makeVisibleShow}>Close</div>
            </div>
            <hr/>
        </div>
    </React.Fragment>
  )
}

export default News