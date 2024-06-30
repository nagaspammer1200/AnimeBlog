import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function GameContainer({GBg,GTitle,GImage,GAlt,GGenre,GYear,GPub,GPlat,GP1,GImage1,GP2,GSteam}) {

  return (
    <div className={GBg}>
        <div className="text-5xl py-3 text-center font-bold hover:text-white"><h2>{GTitle}</h2></div>
          <div className="p-3 sm:p-0 max-w-full">
              <LazyLoadImage className="ring ring-3 rounded ring-offset-1 ring-black transition hover:scale-110 cursor-auto" src={GImage} alt={GAlt} />
          </div>
          <div className="flex-col sm:flex sm:flex-row sm:justify-between m-3">
            <React.Fragment><h5 className="text-2xl font-semibold mt-3 bg-sky-600 hover:bg-yellow-200 sm:max-w-60 p-3 rounded ring ring-2 ring-black transition hover:scale-110 cursor-auto italic">Genres: {GGenre}</h5><br /></React.Fragment>
            <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 hover:bg-yellow-200 sm:max-w-60 p-3 rounded ring ring-2 ring-black transition hover:scale-110 cursor-auto italic">Platforms : {GPlat}</h5><br/></React.Fragment>
          </div>
          <div className="flex-col sm:flex sm:flex-row sm:justify-between m-3">
          <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 hover:bg-yellow-200 sm:max-w-60 p-3 rounded ring-black ring ring-2 transition hover:scale-110 cursor-auto italic">Publisher : {GPub}</h5><br/></React.Fragment>
          <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 hover:bg-yellow-200 sm:max-w-60 max-w-48 p-3 rounded ring-black ring ring-2 hover:scale-110 cursor-auto italic">Year : {GYear}</h5><br/></React.Fragment>
          </div>
          <div><p className="text-lg font-semibold mb-3 p-3 sm:p-0">{GP1}</p></div>
          <div className="p-3 sm:p-0 max-w-full"><LazyLoadImage className="rounded ring-black ring ring-4 hover:scale-110" src={GImage1} alt="" /></div>
          <div><p className="text-lg font-semibold mt-3 p-3 sm:p-0">{GP2}</p></div>
          <div className="pl-32 py-3 sm:pl-96 animate-bounce"><h4><a href={GSteam}><LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fsteam_icon_135152.png?alt=media&token=c998d50f-8913-42d4-a03f-1ff2e5690d94" alt="Steam Logo" /></a></h4></div>
    </div>
  )
}

export default GameContainer