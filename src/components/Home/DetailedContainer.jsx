import React,{ useContext,useState } from 'react'
import { isVisibleGenshinContext } from './MainSection';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function DetailedContainer({DTitle,DImage,DYear,DRating,DGenre,DSummary,DAlt,DSteam,DOfficial,DX,DPS4,DPS5}) {
    const {setIsVisibleGenshin,setIsVisibleHalf,setIsVisibleForza,setIsVisibleNeed,setIsVisibleArise,setIsVisibleMount} = useContext(isVisibleGenshinContext);
    const returnMenu = () => {
        setIsVisibleGenshin(false)
        setIsVisibleHalf(false)
        setIsVisibleForza(false)
        setIsVisibleNeed(false)
        setIsVisibleArise(false)
        setIsVisibleMount(false)
      }

  return (
    <React.Fragment>
        <div className="sm:pl-36 m-16 p-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded">
            <div className="bg-sky-600 text-white p-2 max-w-24 rounded" onClick={returnMenu}><i class="bi bi-arrow-left"></i>Back</div>
            <div className="flex-col sm:flex sm:flex-row space-x-0 sm:space-x-16 p-3"> 
                <div className="font-bold">
                    <div><LazyLoadImage src={DImage}  alt={DAlt} width="150px" height="150px" /></div>
                    <React.Fragment><h3 className="font-black mt-2">{DTitle}</h3><br /></React.Fragment>
                    <React.Fragment><h5>Genres: {DGenre}</h5><br /></React.Fragment>
                    <React.Fragment><h5>Rating : {DRating} <i className="bi bi-star-fill"></i></h5><br/></React.Fragment>
                    <React.Fragment><h5>Year : {DYear}</h5><br/></React.Fragment>
                </div>
                <div className="min-w-16 max-w-64 sm:max-w-96 bg-sky-400 rounded p-3 font-semibold"><p>{DSummary}</p></div>
            </div>
            <div className="mb-4 font-semibold"><h4><a href={DOfficial}>Official Site <i className="bi bi-cast"></i></a></h4></div>
            <div className="mb-4"><h4><a href={DSteam}><LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fsteam_icon_135152.png?alt=media&token=c998d50f-8913-42d4-a03f-1ff2e5690d94" alt="" /></a></h4></div>
        </div>
        <hr />
    </React.Fragment>
  )
}

export default DetailedContainer
