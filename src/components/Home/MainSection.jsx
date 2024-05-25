import React,{ createContext,useState,useEffect } from 'react'
import Container from '../common/Container'
import About from './About'
import Contact from '../common/Contact'
import DetailedContainer from '../common/DetailedContainer'

function MainSection() {
  const [isVisibleCOTE,setIsVisibleCOTE] = useState(false)
  const [isVisibleBC,setIsVisibleBC] = useState(false)
  const [isVisibleOshi,setIsVisibleOshi] = useState(false)
  const [isVisibleVillain,setIsVisibleVillain] = useState(false)
  const showCat = () => {
    setIsVisibleCOTE(true)
  }
  const showBC = () => {
    setIsVisibleBC(true)
  }
  const showO = () => {
    setIsVisibleOshi(true)
  }
  const showV = () => {
    setIsVisibleVillain(true)
  }

  return (
  <isVisibleCOTEContext.Provider value={{isVisibleCOTE,setIsVisibleCOTE,isVisibleBC,setIsVisibleBC,isVisibleOshi,setIsVisibleOshi,isVisibleVillain,setIsVisibleVillain}}>
    <React.Fragment>
      <div className="text-center text-bold text-3xl pt-8 hover:text-white"><h4>Popular Anime</h4></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32">
          <div onClick={showBC}><Container showTitle="Black Clover" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/e7899bc8b7ea56f0133ea02c4020b85f.jpg?alt=media&token=dfa0cc06-0d1b-4baa-9320-8a509d01a585" showGenre="Action" showDescription="The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends." showAuthor="Ingrid Ochoa"  showLike="16.4" showAlt="Black Clover"/></div>
          <div onClick={showCat}><Container showTitle="Classroom of the Elite S3" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/cote.jpeg?alt=media&token=d556e542-a3ae-48b5-ac03-72d9ad87d23a" showLike="20.4" showGenre="Mystery" showDescription=" The third semester kicks off in high gear with a special boot camp deep in the mountains. Can Class D make it back to campus intact, or is this where they finally say goodbye to one of their own?" showAuthor="Shōgo Kinugasa" showAlt="Classroom of the elite Ayanokouji and Karuizawa"/></div>
      </div>
      <div className={isVisibleCOTE?"block":"hidden"}><DetailedContainer DTitle="Classroom of the Elite" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/DC%2Fcote1.jpeg?alt=media&token=4867f951-62d4-47a6-909e-0274f504771f" DYear="2017" DRating="6.7" DSummary="The third season of Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e. The third semester kicks off in high gear with a special boot camp deep in the mountains. Forcibly separated into groups along grade and gender lines, the first, second and third years alike must work together to survive the rugged terrain. Even worse? The leader of the group that comes in last will be expelled. Can Class D make it back to campus intact, or is this where they finally say goodbye to one of their own?" DNetflix="https://www.netflix.com/in/title/80193178" DStudio="Lerche" DGenre="Mystery, School, Thriller" DDuration="24Min"/></div>
      <div className={isVisibleBC?"block":"hidden"}><DetailedContainer DTitle="Black Clover" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/DC%2Fbcc.jpg?alt=media&token=1683345c-20d8-4660-b6af-70aae73e8539" DYear="2019" DRating="8.4" DSummary="Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the 'Wizard King' a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King.Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a 'Black Clover' giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!" DNetflix="https://www.netflix.com/in/title/80238012" DStudio="Studio Pierrot" DGenre="Action Comedy Thriller" DDuration="23Min"/></div>
      <div className="text-center text-bold text-3xl pt-8 hover:text-white"><h4>New Anime</h4></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 ">
          <div onClick={showO}><Container showTitle="Oshi No Ko" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/2023-04-20-1094685.jpeg?alt=media&token=5a4c81c7-3993-4bad-affa-d951a2ed57f5" showLike="25.7" showGenre="Thriller" showDescription="In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies." showAuthor="Essie / Hyeyong" showAlt="Oshi No Ko Ai"/></div>
          <div onClick={showV}><Container showTitle="My Villainous Family Won't Let Me Be" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/sadasd%20(1).png?alt=media&token=989f7d3c-0587-4b88-967e-a1837d1e8865" showLike="20.4" showGenre="Fantasy" showDescription="A distant echo from a life long-forgotten; shattered shards of an ominous future. When her late mot..." showAuthor="hatti / mitchu" showAlt="Villanous Isekai"/></div>
      </div>
      <div className={isVisibleOshi?"block":"hidden"}><DetailedContainer DTitle="Oshi No Ko" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/DC%2Foshi%20no%20ko.jpeg?alt=media&token=056c555c-21f8-48c5-866c-c12cf10fa597" DYear="2020" DRating="9.3" DSummary="In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies. Fans buy into these fabrications, showering their idols with undying love and support, until something breaks the illusion. While the doctor promises Ai to safely deliver her children, he wonders if this encounter with the idol will forever change the nature of his relationship with her." DNetflix="https://www.netflix.com/jp-en/title/81684733" DStudio="Doga Koba" DGenre="Drama Music Seinen" DDuration="24Min"/></div>
      <div className={isVisibleVillain?"block":"hidden"}><DetailedContainer DTitle="My Villainous Family Won't Let Me Be" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/DC%2Fvillain.png?alt=media&token=95504b91-0e94-45e8-ae09-d8e6ff225d7d" DYear="2019" DRating="6.5" DSummary="Most people would prefer being the protagonist of a world full of adventure, be it in a game or in another world. But, unfortunately, a certain girl is not so lucky. Regaining the memories of her past life, she realizes that she was reborn in the world of Fortune Lover—one of the games she used to play.Even so, to make a change that will affect the lives of everyone around her, she strives—not as the heroine—but as the villainess. [Written by MAL Rewrite]" DNetflix="https://www.netflix.com/in/title/80238012" DStudio="Silver Link" DGenre="Isekai Romance Comedy" DDuration="24Min"/></div>
      <About/>
      <Contact/>
    </React.Fragment>
  </isVisibleCOTEContext.Provider>
  )
}

export default MainSection
export const isVisibleCOTEContext = createContext();