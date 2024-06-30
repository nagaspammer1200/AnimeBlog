import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Container({showTitle,showImage,showPlatform,showGenre,showPublisher,showDescription,showAlt}) {
    const [isVisible,setIsVisible] = useState(false)

  return (
    <React.Fragment>
        <div className="mt-12 mb-4 max-w-64 relative h-60 overflow-hidden cursor-pointer rounded-lg" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
            <div className="z-10 absolute"><LazyLoadImage src={showImage} alt={showAlt} /></div>
            <div className={isVisible?"hidden":"p-3 absolute z-50 text-sm top-0 left-0 w-full h-full font-bold"}>
            <div className={isVisible?"text-black z-50":"text-white z-50"}>{showTitle}</div>
                <div className=" text-fuchsia-500 mt-2 mb-8"><i class="bi bi-suit-heart-fill text-green-500"></i>{showPlatform}</div>
                <div className="text-white mt-16 italic">{showGenre}</div>
            </div>
            <div className={isVisible?"p-3 z-50 text-sm top-0 left-0 w-full h-full absolute font-bold bg-purple-700":"hidden"}>
            <div className={isVisible?"text-black z-50":"text-white z-50"}>{showTitle}</div>
                <div className="text-orange-600">{showPublisher}</div>
                <div className="text-white m-3 italic">{showDescription}</div>
            </div> 
        </div>
    </React.Fragment>
  )
}

export default Container
