import React,{ createContext,useState,useEffect,useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { isBoxListVisible } from '../../pages/Article'

function TextComponent({TextTitle,Text1,Text2,Text3,TextImg,TextImg2,TextAlt,TextAlt2,TextDate,TextAuthor,TextTime,TextGame}) {

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
      <div className="bg-sky-600 text-white p-2 max-w-24 rounded mb-3 transition hover:bg-black hover:-translate-y-1 hover:scale-110" onClick={returnMenu}><i class="bi bi-arrow-left"></i>   Back</div>
      <div className="flex flex-row justify-between mb-3">
          <div className="text-sm sm:text-base text-semibold animate-pulse font-bold overline"><i>{TextTime}</i> Minutes Read</div>
          <div className="bg-black text-white text-sm p-2 max-w-24 rounded font-semibold">{TextGame}</div>
        </div>
        <h1 className="mb-8 text-3xl sm:text-5xl font-bold hover:text-white transition duration-200 delay-100 hover:scale-110 ease-in-out">{TextTitle}</h1>
        <div className="flex flex-col sm:flex-row justify-between my-8 text-sm sm:text-base font-mono">
          <div>Published on <b>{TextDate}</b></div>
          <div>Written By <b><i>{TextAuthor}</i></b></div>
        </div>
        <div><LazyLoadImage className="ring ring-3 rounded ring-offset-1 ring-black transition hover:scale-110" src={TextImg} height="800px" width="1200px" alt={TextAlt} /></div>
        <div className="text-start mt-3 mb-3 font-semibold">{Text1}<br /><br /><br /><div onClick={showHiddenText} className={isHidden?"hidden":"block text-center"}><button className="bg-sky-600 p-2 rounded-xl transition duration-300 delay-150 hover:scale-110 hover:-translate-y-2">Read More</button>
        </div>
        <div className={isHidden?"block text-semibold":"hidden"}>
            {Text2}
            <div className="mt-3 mb-3 "><LazyLoadImage className="ring ring-3 rounded ring-offset-1 ring-black transition hover:scale-110" src={TextImg2} height="800px" width="1200px" alt={TextAlt2} /></div>
        </div>
        </div>
    </div>
  )
}

export default TextComponent