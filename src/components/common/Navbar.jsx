import React,{useState} from 'react'

function Navbar() {
    const [displayMode,setDisplayMode] = useState(false);
    const changeDisplay = () => {
        setDisplayMode(!displayMode) 
        console.log(displayMode)
    }

  return (
    <React.Fragment>
        <div className={displayMode?"border-black border-b-2 flex flex-col space-y-0 sm:space-y-0 sm:flex-row items-center justify-evenly font-bold text-fuchsia-600 pt-4":"border-black border-b-2 flex flex-col space-y-1 sm:space-y-0 sm:flex-row items-center justify-evenly font-bold text-fuchsia-600 pt-4"}> 
            <div className="block sm:hidden" onClick={changeDisplay}><i className="bi bi-list"></i></div>
            <a href="/"><div className={displayMode?"p-2 rounded-md sm:block bg-neutral-50 hover:bg-neutral-300":"rounded-xl hidden sm:block p-2 bg-neutral-50 hover:bg-neutral-300 "}>Home</div></a>
            <a href="/latest"><div className={displayMode?"p-2 sm:block rounded-md bg-neutral-50 hover:bg-neutral-300":"rounded-xl hidden sm:block p-2 bg-neutral-50 hover:bg-neutral-300 "}>Latest News</div></a>
            <a href="/top"><div className={displayMode?"p-2 sm:block rounded-md bg-neutral-50 hover:bg-neutral-300":"rounded-xl hidden sm:block p-2 bg-neutral-50 hover:bg-neutral-300 "}>Top 10</div></a>
            <a href="/article"><div className={displayMode?"p-2 sm:block rounded-md bg-neutral-50 hover:bg-neutral-300":"rounded-xl sm:block hidden p-2 bg-neutral-50 hover:bg-neutral-300 "}>Articles</div></a>
        </div>
    </React.Fragment>
  )
}

export default Navbar
