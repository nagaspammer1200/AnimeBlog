import React,{ useContext,useState } from 'react'
import { isVisibleGenshinContext } from './MainSection';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function DetailedContainer({DTitle,DImage,DYear,DRating,DGenre,DSummary,DAlt,DSteam,DOfficial,DX,DPS4,DPS5}) {
    const {setIsVisibleGenshin,setIsVisibleHalf,setIsVisibleForza,setIsVisibleNeed,setIsVisibleArise,setIsVisibleMount,isVisibleContainer,setIsVisibleContainer} = useContext(isVisibleGenshinContext);
    const returnMenu = () => {
        setIsVisibleGenshin(false)
        setIsVisibleHalf(false)
        setIsVisibleForza(false)
        setIsVisibleNeed(false)
        setIsVisibleArise(false)
        setIsVisibleMount(false)
        setIsVisibleContainer(false)
      }

  return (
    <React.Fragment>
        <div className="sm:pl-36 ml-16 mr-16 mb-16 p-5 rounded">
            <div className="text-yellow-600 bg-dark p-2 max-w-24 rounded transistion ease-in-out duration-300 delay-100 hover:scale-125 hover:-translate-y-2" onClick={returnMenu}><i class="bi bi-arrow-left"></i>  Back</div>
            <div className="flex-col sm:flex sm:flex-row space-x-0 sm:space-x-56 sm:p-3"> 
                <div className="font-bold ">
                    <div className="my-3 saturate-200 contrast-50 hover:filter-none"><img src={DImage}  alt={DAlt} width="250px" height="250px" /></div>
                    <React.Fragment><h3 className="font-black mt-2 text-4xl">{DTitle}</h3><br /></React.Fragment>
                    <React.Fragment><h5 className="animate-pulse">Genres: {DGenre}</h5><br /></React.Fragment>
                    <React.Fragment><h5 className="animate-pulse">Rating : {DRating} <i className="bi bi-star-fill"></i></h5><br/></React.Fragment>
                    <React.Fragment><h5 className="animate-pulse">Year : {DYear}</h5><br/></React.Fragment>
                </div>
                <div className="min-w-16 max-w-64 sm:max-w-96 rounded p-5 text-xl text-yellow-600 bg-dark font-semibold mb-3"><p>{DSummary}</p></div>
            </div>
            <div className="mb-4 font-bold animate-bounce"><h4><a href={DOfficial}>Official Site <i className="bi bi-download"></i></a></h4></div>
            <div className="mb-4 animate-bounce"><h4><a href={DSteam}><LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fsteam_icon_135152.png?alt=media&token=c998d50f-8913-42d4-a03f-1ff2e5690d94" alt="" /></a></h4></div>
        </div>
        <hr />
    </React.Fragment>
  )
}

export default DetailedContainer
