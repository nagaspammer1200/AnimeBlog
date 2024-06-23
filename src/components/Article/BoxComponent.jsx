import React,{ createContext,useState,useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BoxComponent({BoxAlt,BoxImg,BoxTitle,BoxList1,BoxList2,BoxList3}) {

  return (
    <div className="flex flex-row gap-4 sm:gap-8">
        <div><LazyLoadImage src={BoxImg} height="200px" width="160px" alt={BoxAlt} /></div>
        <div>
            <h3 className="mb-3 sm:text-base text-sm">{BoxTitle}</h3>
            <p className="text-xs text-start"><i className="bi bi-dot"></i>{BoxList1}</p>
            <p className="text-xs text-start"><i className="bi bi-dot"></i>{BoxList2}</p>
            <p className="text-xs text-start"><i className="bi bi-dot"></i>{BoxList3}</p>
        </div>
    </div>
  )
}

export default BoxComponent