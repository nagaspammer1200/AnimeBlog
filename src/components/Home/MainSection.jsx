import React from 'react'
import Container from '../common/Container'
import About from './About'

function MainSection() {

  return (
    <React.Fragment>
        <div className="text-center text-bold text-3xl pt-8"><h4>Popular Anime</h4></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 ">
            <React.Fragment><Container showTitle="The Kiss Bet" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/2024-05-13-1106130.jpeg?alt=media&token=78df76c4-0e8b-4c30-977e-63e37aaae906" showLike="15.7" showGenre="Romance" showDescription="It’s senior year and Sara Lin just turned 18. She’s got great friends, a cool Dad (or so he thinks) and a whole lot ahead of her. The last thing she needs is to worry..." showAuthor="Ingrid Ochoa"/></React.Fragment>
            <React.Fragment><Container showTitle="Classroom of the Elite S3" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/cote.jpeg?alt=media&token=d556e542-a3ae-48b5-ac03-72d9ad87d23a" showLike="20.4" showGenre="Mystery" showDescription=" The third semester kicks off in high gear with a special boot camp deep in the mountains. Can Class D make it back to campus intact, or is this where they finally say goodbye to one of their own?" showAuthor="Shōgo Kinugasa"/></React.Fragment>
        </div>
        <div className="text-center text-bold text-3xl pt-8"><h4>New Anime</h4></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 ">
            <React.Fragment><Container showTitle="I Thought My Time Was Up!" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/timeisup.png?alt=media&token=3cc24b37-9321-4fe2-a2ac-cd2aa2a097a9" showLike="25.7" showGenre="Romance" showDescription="Feeling a little under the weather, Lariette Blanche visits Doctor Zakascoff only to find out that she has an extremely rare congenital ..." showAuthor="Essie / Hyeyong"/></React.Fragment>
            <React.Fragment><Container showTitle="My Villainous Family Won't Let Me Be" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/villain.png?alt=media&token=4652340d-74a6-4e8a-8477-b8c79f2d9cb3" showLike="20.4" showGenre="Fantasy" showDescription="A distant echo from a life long-forgotten; shattered shards of an ominous future. When her late mot..." showAuthor="hatti / mitchu"/></React.Fragment>
        </div>
        <About/>
    </React.Fragment>
  )
}

export default MainSection
 