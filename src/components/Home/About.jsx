import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function About() {
  return (
    <React.Fragment>
        <div className="text-start p-8 hover:bg-gradient-to-r text-white font-semibold from-purple-700 to-sky-800">
            <p className="sm:pl-48 sm:pr-48 mb-3">Get the latest scoop on the gaming world! Stay up-to-date with weekly articles, top 10 lists, and breaking news on new releases, updates, and trends in the video game industry. Your one-stop hub for all things gaming!. Here's what's awaiting you!!</p>
            <ul className="list-none text-start sm:ml-64 text-xs  sm:text-sm">
                <li className="mb-2"><i className="bi bi-circle-fill"></i>  Latest Games</li>
                <li className="mb-2"><i className="bi bi-circle-fill"></i>  Articles dedicated to Gaming</li>
                <li className="mb-2"><i className="bi bi-circle-fill"></i>  Editor's Choice for Top 10 Games</li>
                <li className="mb-2"><i className="bi bi-circle-fill"></i>  Esports Coverage </li>
            </ul>
            <p className="sm:pl-48 sm:pr-48 mb-3">Stay connected with us for exclusive updates, behind-the-scenes insights, and community engagement! Follow us on social media and join the conversation using following links!!</p>
            <div className="sm:ml-56 flex-row flex gap-8">
              <div className="hover:scale-125"><a href="discordapp.com/users/newuserdontflame_27297_69611"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fdiscord.png?alt=media&token=7aeda5e9-7f39-46b5-848c-78f86182acfa" alt="Discord Logo" /></a></div>
              <div className="hover:scale-125"><a href="https://github.com/nagaspammer1200"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Fgithub.png?alt=media&token=e6f14a54-a0cf-48a1-bb2a-eb396f83e128" alt="Github Logo" /></a></div>
              <div className="hover:scale-125"><a href="https://www.linkedin.com/in/sreekanth-p-s-867515290/"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/icons%2Flinkedin.png?alt=media&token=bde2dd29-32e4-490a-ac3f-d651823123dd" alt="LinkedIn Logo" /></a></div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About
 