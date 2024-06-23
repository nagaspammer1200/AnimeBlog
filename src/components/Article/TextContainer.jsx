import React,{ createContext,useState,useEffect,useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { isBoxListVisible } from '../../pages/Article'

function TextComponent({TextTitle,Text1,Text2,Text3,TextImg,TextImg2,TextImg3,TextAlt,TextAlt2,TextAlt3,TextDate,TextAuthor,TextTime,TextGame}) {

  const {setIsLGD,setIsTiles,setIsTI,setIsLeague,setIsApex,setIsSteam,setIsSpider} = useContext(isBoxListVisible);

const [isHidden,setIsHidden] = useState(false)
const showHiddenText = () => {
    setIsHidden(true)
}
const returnMenu = () => {
  setIsLGD(false)
  setIsApex(false)
  setIsLeague(false)
  setIsTI(false)
  setIsSpider(false)
  setIsSteam(false)
  setIsTiles(false)
}

  return (
    <div className="sm:pl-32 sm:pr-32">
      <div className="bg-sky-600 text-white p-2 max-w-24 rounded mb-3" onClick={returnMenu}><i class="bi bi-arrow-left"></i>Back</div>
      <div className="flex flex-row justify-between mb-3">
          <div className="text-xs sm:text-sm">{TextTime} Minutes Read</div>
          <div className="bg-black text-white text-sm p-1 max-w-24 rounded">{TextGame}</div>
        </div>
        <h1 className="mb-8">{TextTitle}</h1>
        <div className="flex flex-col sm:flex-row justify-between mb-3 text-xs sm:text-sm">
          <div>Published on {TextDate}</div>
          <div>Written By {TextAuthor}</div>
        </div>
        <div><LazyLoadImage src={TextImg} height="800px" width="1200px" alt={TextAlt} /></div>
        <div className="text-start mt-3 mb-3">{Text1}<br /><br /><br /><div onClick={showHiddenText} className={isHidden?"hidden":"block text-center"}>Read More</div>
        <div className={isHidden?"block":"hidden"}>
            {Text2}
            <div className="mt-3 mb-3"><LazyLoadImage src={TextImg2} height="800px" width="1200px" alt={TextAlt2} /></div>
            <div>{Text3} <br /><br /><br /><LazyLoadImage src={TextImg3} alt={TextAlt3} /></div>
        </div>
        </div>
    </div>
  )
}

export default TextComponent