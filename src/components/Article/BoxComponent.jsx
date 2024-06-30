import React,{ createContext,useState,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BoxComponent({BoxAlt,BoxImg,BoxTitle,BoxList1,BoxList2,BoxList3}) {

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 hover:bg-purple-700 p-3 ring ring-black hover:text-white transition duration-200 delay-200 hover:scale-110 cursor-pointer">
        <div><LazyLoadImage src={BoxImg} alt={BoxAlt} /></div>
        <div>
            <h3 className="mb-3 text-3xl sm:text-4xl font-bold">{BoxTitle}</h3>
            <p className="text-start font-semibold font-mono"><i className="bi bi-dot"></i>{BoxList1}</p>
            <p className="text-start font-semibold font-mono"><i className="bi bi-dot"></i>{BoxList2}</p>
            <p className="text-start font-semibold font-mono"><i className="bi bi-dot"></i>{BoxList3}</p>
        </div>
    </div>
  )
}

export default BoxComponent