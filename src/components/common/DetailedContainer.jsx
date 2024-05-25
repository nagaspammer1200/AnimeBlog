import React,{ useContext,useState } from 'react'
import { isVisibleCOTEContext } from '../Home/MainSection';

function DetailedContainer({DTitle,DImage,DYear,DRating,DPlot,DCharacters,DPacing,DConclusion,DDuration,DStudio,DGenre,DSummary,DNetflix}) {
    const [isVisible,setIsVisible] = useState(false)
    const {isVisibleCOTE,setIsVisibleCOTE,isVisibleBC,setIsVisibleBC,isVisibleOshi,setIsVisibleOshi,isVisibleVillain,setIsVisibleVillain} = useContext(isVisibleCOTEContext);
    const returnMenu = () => {
        setIsVisibleCOTE(false)
        setIsVisibleBC(false)
        setIsVisibleOshi(false)
        setIsVisibleVillain(false)
      }

  return (
    <React.Fragment>
        <div className="pl-16 sm:pl-36 pr-16">
            <div className="bg-sky-600 text-white p-3 max-w-48 rounded" onClick={returnMenu}><i class="bi bi-arrow-left"></i>Back</div>
            <div className="flex-col sm:flex sm:flex-row space-x-0 sm:space-x-16 p-3"> 
                <div>
                    <div><img src={DImage} alt="" width="150px" height="150px" /></div>
                    <React.Fragment><h3>{DTitle}</h3><br /></React.Fragment>
                    <React.Fragment><h5>Studio : {DStudio}</h5><br /></React.Fragment>
                    <React.Fragment><h5>Duration : {DDuration}</h5><br /></React.Fragment>
                    <React.Fragment><h5>Genres: {DGenre}</h5><br /></React.Fragment>
                    <React.Fragment><h5>Rating : {DRating} <i className="bi bi-star-fill"></i></h5><br/></React.Fragment>
                    <React.Fragment><h5>Year : {DYear}</h5><br/></React.Fragment>
                </div>
                <div className="min-w-16 max-w-64 sm:max-w-96 bg-rose-700 rounded p-3"><p>{DSummary}</p></div>
            </div>
            <div className="mb-4"><h4><a href={DNetflix}>Streaming on Netflix <i className="bi bi-cast"></i></a></h4></div>
        </div>
        <hr />
    </React.Fragment>
  )
}

export default DetailedContainer
