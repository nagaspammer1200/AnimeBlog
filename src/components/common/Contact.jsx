import React,{useState} from 'react'

function Contact() {
  return (
    <React.Fragment>
       <div className="relative">
            <div className="absolute z-10"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/contact.png?alt=media&token=035b5c1c-b4e2-479c-a80e-a7cc77d7f894" alt="contact section background" /></div>
            <div className="text-black z-50 absolute m-16 flex flex-col sm:flex sm:flex-row sm:space-x-48">
                <div className="hidden sm:block"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/tomoko-kuroki.gif?alt=media&token=363f943a-92eb-4722-ad5b-c0cac73ddd28" alt="Watamote death note parody" height="400px" width="300px"/></div>
                <div className="p-1 sm:p-16 text-wrap text-black rounded">
                    <b><h3>Contact Us <br /></h3>
                    <p><i>animeblog1234@gmail.com</i></p></b>
                </div>
            </div>
       </div> 
    </React.Fragment>
  )
}

export default Contact 