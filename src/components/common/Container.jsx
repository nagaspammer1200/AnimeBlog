import React,{useState} from 'react'

function Container() {
    const [isVisible,setIsVisible] = useState(false)

  return (
    <React.Fragment>
        <div className="mt-12 mb-4 max-w-64 relative h-60 overflow-hidden" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
            <div className="z-10 absolute"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/2024-05-13-1106130.jpeg?alt=media&token=78df76c4-0e8b-4c30-977e-63e37aaae906" alt="" /></div>
            <div className={isVisible?"hidden":"p-3 absolute z-50 text-sm top-0 left-0 w-full h-full font-bold"}>
            <div className={isVisible?"text--50 z-50":"text-black z-50"}>The Kiss Bet</div>
                <div className=" text-fuchsia-500 mt-2 mb-8"><i class="bi bi-suit-heart-fill text-green-500"></i>15.7M</div>
                <div className="text-black-500 mt-16 italic">Romance</div>
            </div>
            <div className={isVisible?"p-3 z-50 text-sm top-0 left-0 w-full h-full absolute font-bold bg-purple-700":"hidden"}>
            <div className={isVisible?"text-neutral-50 z-50":"text-black z-50"}>The Kiss Bet</div>
                <div className="text-orange-600">Ingrid Orchoa</div>
                <div className="text-white m-3 italic">It’s senior year and Sara Lin just turned 18. She’s got great friends, a cool Dad (or so he thinks) and a whole lot ahead of her. The last thing she needs is to worry...</div>
            </div> 
        </div>
    </React.Fragment>
  )
}

export default Container
