import React,{useState} from 'react'

function About() {
  return (
    <React.Fragment>
        <div className="text-center text-bold text-3xl p-8"><h1>Here's what we Offer</h1></div>
        <React.Fragment>
            <React.Fragment>
                <div className="p-16 space-y-8 pl-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                    <div className="block sm:mb-48 sm:flex space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div className="mb-32 sm:mb-0"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/shion-shion-yozakura.gif?alt=media&token=6a5632c7-df71-43ca-8190-6ae63ab3b6d3" alt="Anime Girl scrolling aimlessly" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Latest News</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Anime news site with daily updates, covering new releases, game adaptations, and industry interviews, delivering the latest in anime culture.</p></div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse sm:flex sm:flex-row space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Weekly Articles</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Stay updated with our weekly anime news round-up, covering the latest shows, industry updates, and community events. We are the most popular news site when it comes to Anime!</p></div>
                        </div>
                        <div className="sm:max-w-48 sm:pb-16"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/tkthao219-quby.gif?alt=media&token=8dcd7a49-ef31-4bb7-aca2-4a8e6421c1ed" alt="quby animation" /></div>
                    </div>
                    <div className="block sm:flex space-y-16 sm:space-x-60 mb-32 sm:mb-16">
                        <div className="pt-28"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/death-note-light-yagami.gif?alt=media&token=63abfa39-e6a0-4f29-b129-9c1e56365699" alt="dramatic writing anime" height="400px" width="300px" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Episode Highlights</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Unveiling key moments from the latest anime episodes, delivering in-depth analysis and discussion.</p></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    </React.Fragment>
  )
}

export default About
 