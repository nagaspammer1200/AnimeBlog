import React,{useState} from 'react'

function Contact() {
  return (
    <React.Fragment>
       <div className="relative">
            <div className="absolute z-10"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fbackground%20(1).jpg?alt=media&token=5c6fda09-55b5-4905-8076-055df7a1a596" alt="contact section background" /></div>
            <div className="text-black z-50 absolute m-16 flex flex-col sm:flex sm:flex-row sm:space-x-48">
                <div className="hidden sm:block"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfs.gif?alt=media&token=3568ff62-474f-4da7-8ddc-73a597eae976" alt="Watamote death note parody" height="400px" width="300px"/></div>
                <div className="p-1 sm:p-16 text-wrap text-black text-white font-extralight sm:font-semibold">
                    <b><h3>Contact Us <br /></h3>
                    <p><i>If you have any suggestions contact us at gamingblog1234@gmail.com</i></p></b>
                </div>
            </div>
       </div> 
    </React.Fragment>
  )
}

export default Contact 