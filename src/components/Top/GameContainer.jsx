import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function GameContainer({GBg,GTitle,GImage,GAlt,GGenre,GYear,GPub,GPlat,GP1,GImage1,GP2,GSteam}) {

  return (
    <div className={GBg}>
        <div className="text-5xl mb-3 text-center font-bold"><h2>{GTitle}</h2></div>
          <div className="p-3 sm:p-0">
              <LazyLoadImage src={GImage} alt={GAlt} width="800px" height="500px" />
          </div>
          <div className="flex-row sm:flex sm:flex-col sm:justify-between m-3">
            <React.Fragment><h5 className="text-2xl font-semibold mt-3 bg-sky-600 sm:max-w-60 p-3 rounded">Genres: {GGenre}</h5><br /></React.Fragment>
            <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 sm:max-w-60 p-3 rounded">Platforms : {GPlat}</h5><br/></React.Fragment>
          </div>
          <div className="flex-row sm:flex sm:flex-col sm:justify-between m-3">
          <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 sm:max-w-60 p-3 rounded">Publisher : {GPub}</h5><br/></React.Fragment>
          <React.Fragment><h5 className="text-2xl font-semibold bg-sky-600 sm:max-w-60 p-3 rounded">Year : {GYear}</h5><br/></React.Fragment>
          </div>
          <div><p className="text-lg font-semibold mb-3 p-3 sm:p-0">{GP1}</p></div>
          <div className="p-3 sm:p-0"><LazyLoadImage src={GImage1} alt="" width="800px" height="500px" /></div>
          <div><p className="text-lg font-semibold mt-3 p-3 sm:p-0">{GP2}</p></div>
          <div className="sm:p-8"><h4><a href={GSteam}><LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fsteam_icon_135152.png?alt=media&token=c998d50f-8913-42d4-a03f-1ff2e5690d94" alt="Steam Logo" /></a></h4></div>
    </div>
  )
}

export default GameContainer