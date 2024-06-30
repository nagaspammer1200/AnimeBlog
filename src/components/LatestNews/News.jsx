import React,{ createContext,useState,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function News({Image,Title,Date,Author,Summary,Alt,SteamLink,Tag,PHS}) {
    const [makeVisible,setMakeVisible] = useState(false)
    const makeVisibleRead = () => {
        setMakeVisible(true)
    }
    const makeVisibleShow = () => {
        setMakeVisible(false)
    }

  return (
    <React.Fragment>
        <div className="flex flex-col sm:flex-row p-12 hover:bg-purple-700">
            <div><LazyLoadImage className="ring ring-3 rounded ring-black transition hover:scale-110" src={Image} alt={Alt} height="300px" width="300px"/></div>
            <div className={makeVisible?"text-center p-3 ml-0 sm:ml-48 mt-8":"text-center pl-0 sm:pl-48 mt-8"}>
                <div className="mb-4 font-bold text-3xl hover:text-white"><h2>{Title}</h2></div>
                <div className={makeVisible?"hidden":"flex justify-between mb-16 text-base font-semibold hover:text-yellow-300 italic font-mono"}>
                    <div>{Date}</div>
                    <div>{Author}</div>
                </div>
                <div className={makeVisible?"hidden":"bg-black text-white animate-pulse text-sm font-bold m-4 p-2 max-w-24 rounded"}>{Tag}</div>
                <div className={makeVisible?"hidden":"block bg-sky-600 text-white p-2 max-w-24 rounded transition ease-in-out duration-300 delay-100 hover:-translate-y-2 hover:scale-110 hover:bg-yellow-400 animate-bounce ml-28 sm:ml-52 cursor-pointer"} onClick={makeVisibleRead}>Read More</div>
                <div className={makeVisible?"block max-w-96 text-left sm:mt-8 font-semibold text-white bg-zinc-900 p-3 mb-3 font-mono":"hidden"}><p><i>{Summary}</i><br /><br />More Information can be found <a className="text-blue-500"href={SteamLink}>here</a></p></div>
                <div className={makeVisible?"block bg-sky-600 text-white p-2 max-w-24 rounded transition ease-in-out duration-200 delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 ml-24 sm:ml-52":"hidden"} onClick={makeVisibleShow}>Close</div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default News