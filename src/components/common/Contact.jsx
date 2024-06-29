import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Contact() {
  return (
    <React.Fragment>
       <div className="relative">
            <div className="absolute z-10"><LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fcontact2.jpg?alt=media&token=60f81f11-eee5-49d5-88e9-8c383e6b5dda" alt="contact section background" /></div>
            <div className="text-black text-sm sm:text-base z-50 absolute sm:ml-32 sm:ml-32 mr-8 pt-3 flex flex-row space-x-8 sm:space-x-48 p-1 sm:p-3 rounded">
               <div className="ml-16 sm:ml-36">
                  <ul className="list-none">
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 sm:mb-3 transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300"><a href="/"><li>Home</li></a></div>
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 sm:mb-3 transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300"><a href="/latest"><li>Latest News</li></a></div>
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 sm:mb-3 transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300"><a href="/top"><li>Top 10</li></a></div>
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 sm:mb-3 transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300"><a href="/article"><li>Articles</li></a></div>
                  </ul>
                </div> 
                <div>
                  <ul className="list-none">
                  <LazyLoadImage src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Flogo.png?alt=media&token=d5a448a3-7b3a-41bb-8e1a-8178765fc805" height="100px" width="100px"/>
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 mt-2 text-xs transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-400 duration-400"><a href="/privacypolicy"><li>Privacy Policy</li></a></div>
                    <div className="bg-purple-600 text-white p-1 rounded mb-2 text-xs transition ease-in-out delay-150 bg-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:bg-fuchsia-400 duration-400"><a href="/termsandconditons"><li>Terms and Conditions</li></a></div>
                  </ul>
                </div>
            </div>
       </div> 
    </React.Fragment>
  )
}

export default Contact 