import React,{useState} from 'react'

function About() {
  return (
    <React.Fragment>
        <div className="text-center text-bold text-3xl p-8"><h1>Here's what we Offer</h1></div>
        <React.Fragment>
            <React.Fragment>
                <div className="p-16 space-y-8 pl-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                    <div className="block sm:mb-48 sm:flex space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div className="mb-32 sm:mb-0 sm:mt-16"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fvideo-games.gif?alt=media&token=ca54ce27-5621-429f-b439-847e0e1af2fe" alt="Playing Games" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Latest News</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Video Games news site with daily updates, covering new releases, game adaptations, and industry interviews, delivering the latest in gaming culture.</p></div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse sm:flex sm:flex-row space-y-16 mb-32 sm:space-x-60 sm:mb-16">
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Weekly Articles</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Stay updated with our weekly gaming news round-up, covering the latest shows, industry updates, and community events. We are the most popular news site when it comes to Games!</p></div>
                        </div>
                        <div className="sm:max-w-48 sm:pb-16"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fseulgi-kang-seulgi.gif?alt=media&token=be706452-1001-4d48-9553-cbe9baf10d33" alt="Two Girls Using a Tablet" /></div>
                    </div>
                    <div className="block sm:flex space-y-16 sm:space-x-60 mb-32 sm:mb-16">
                        <div className="pt-28"><img src="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfs-nfsmw.gif?alt=media&token=7c43d2e2-ae33-438b-aa5b-5027a51ec825" alt="Car chased by police" height="400px" width="300px" /></div>
                        <div>
                            <div className="text-center text-bold text-xl mb-6 text-white"><h3>Gameplay Guides</h3></div>
                            <div className="max-w-48 text-fuchsia-600"><p>Expert gameplay guides offering tips, strategies, and walkthroughs for beginners to advanced players, maximizing your gaming experience and skills.</p></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    </React.Fragment>
  )
}

export default About
 