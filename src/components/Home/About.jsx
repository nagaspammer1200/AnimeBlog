import React,{useState} from 'react'

function About() {
  return (
    <React.Fragment>
        <div className="text-center text-bold text-3xl p-8"><h1>Here's what we Offer</h1></div>
        <React.Fragment>
            <React.Fragment>
                <div className="p-16 space-y-8 pl-20">
                    <div className="block sm:flex space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/cuteredgirl.jpeg?alt=media&token=aabe9295-1cbf-4c7b-b45b-2ea63716241d" alt="" height="400px" width="300px" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6"><h3>Latest News</h3></div>
                            <div className="max-w-48"><p>Anime news site with daily updates, covering new releases, game adaptations, and industry interviews, delivering the latest in anime culture.</p></div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse sm:flex sm:flex-row space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div>
                            <div className="text-center text-bold text-xl mb-6"><h3>Weekly Articles</h3></div>
                            <div className="max-w-48"><p>Stay updated with our weekly anime news round-up, covering the latest shows, industry updates, and community events. We are the most popular news site when it comes to Anime!</p></div>
                        </div>
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/redgirlinminiskirt.png?alt=media&token=474da3c2-ea4a-4a0b-99e1-f479aad9b8a4" alt="" height="400px" width="300px" /></div>
                    </div>
                    <div className="block sm:flex space-y-16 sm:space-x-60 mb-32 sm:mb-16">
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/purpleidol.jpeg?alt=media&token=f6a09978-f73b-4d60-b19f-930e4f7e5de0" alt="" height="400px" width="300px" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6"><h3>Episode Highlights</h3></div>
                            <div className="max-w-48"><p>Unveiling key moments from the latest anime episodes, delivering in-depth analysis and discussion.</p></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    </React.Fragment>
  )
}

export default About
 