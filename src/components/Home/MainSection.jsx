import React,{ createContext,useState} from 'react'
import About from './About'
import Contact from '../common/Contact'
import DetailedContainer from './DetailedContainer'
import Container from './Container'

function MainSection() {
  const [isVisibleGenshin,setIsVisibleGenshin] = useState(false)
  const [isVisibleHalf,setIsVisibleHalf] = useState(false)
  const [isVisibleArise,setIsVisibleArise] = useState(false)
  const [isVisibleMount,setIsVisibleMount] = useState(false)
  const [isVisibleForza,setIsVisibleForza] = useState(false)
  const [isVisibleNeed,setIsVisibleNeed] = useState(false)
  const showCat = () => {
    setIsVisibleGenshin(true)
  }
  const showBC = () => {
    setIsVisibleHalf(true)
  }
  const showO = () => {
    setIsVisibleForza(true)
  }
  const showV = () => {
    setIsVisibleNeed(true)
  }
  const showA = () => {
    setIsVisibleArise(true)
  }
  const showM = () => {
    setIsVisibleMount(true)
  }

  return (
  <isVisibleGenshinContext.Provider value={{isVisibleGenshin,setIsVisibleGenshin,isVisibleHalf,setIsVisibleHalf,isVisibleForza,setIsVisibleForza,isVisibleNeed,setIsVisibleNeed,setIsVisibleArise,setIsVisibleMount}}>
    <React.Fragment>
      <div className="text-center text-bold text-3xl pt-8 hover:text-white"><h4>Popular Games</h4></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-10 sm:ps-32">
          <div onClick={showBC}><Container onClick={showBC} showTitle="Genshin Impact" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fgenshin%20(1).jpg?alt=media&token=4b4e602d-1439-4017-8ae4-4d96e3bb8979" showGenre="Role Playing Game" showDescription="Genshin Impact takes place in the fantasy world of Teyvat, home to seven nations, each of which is tied to a different element and ruled by a different god (archon)." showPublisher="miHoYo"  showPlatform="PS4 PS5 Android" showAlt="Genshin Impact"/></div>
          <div onClick={showCat}><Container showTitle="Half Life Alyx" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fhla.jpg?alt=media&token=99e210e0-068f-41ac-b26c-f37d16a64b91" showPlatform="Windows Linux" showGenre="First Person Shooter" showDescription="Players control the Resistance member Alyx Vance as she and her father Eli Vance fight the Combine, an alien empire that has conquered Earth." showPublisher="Valve" showAlt="Half Life Alyx"/></div>
          <div onClick={showA}><Container showTitle="Tales of Arise" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fta.jpeg?alt=media&token=c80e41f7-18ae-48b7-980e-72457b89b1ff" showPlatform="PS5 PS4 Windows Xbox" showGenre="Action Role Playing" showDescription="Arise takes place in a setting divided between the medieval world. Lenegis invaded and conquered Dahna, subsequently enslaving the population and dividing the land into five isolated realms." showPublisher="Bandai Namco Entertainment" showAlt="Tales of Arise"/></div>
          <div onClick={showM}><Container showTitle="Mount & Blade II: Bannerlord" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fmb.jpeg?alt=media&token=0e172b99-7e36-4a0c-8671-7ff3be06bad5" showPlatform="Windows Linux" showGenre="Strategy Action" showDescription="Bannerlord takes place 210 years before its predecessor, with a setting inspired by the Migration Period. Bannerlord was announced in 2012." showAlt="Mount & Blade: Bannerlord" showPublisher="TaleWorlds Entertainment"/></div>
      </div>
      <div className={isVisibleHalf?"block":"hidden"}><DetailedContainer DTitle="Genshin Impact" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fgi2.jpg?alt=media&token=a3a0f548-c4ec-4fbf-8dcf-d9b6ec5d9e57" DYear="2020" DAlt="Genshin Impact Environment" DRating="8.6" DSummary="Genshin Impact is an open-world, action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks. Characters may have their abilities enhanced in various ways, mainly through directly leveling them up and improving the artifacts and weapons that a character can equip." DOfficial="https://ys.mihoyo.com/main" DGenre="Role Playing Game" /></div>
      <div className={isVisibleGenshin?"block":"hidden"}><DetailedContainer DTitle="Half Life Alyx" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fhla2.jpg?alt=media&token=6ca9cb41-c3b4-46b5-bf5e-9bdd796aec93" DYear="2020" DRating="8.4" DAlt="Half Life Alyx Environment" DSummary="The previous Half-Life game, Episode Two, was released in 2007 and ended on a cliffhanger.The game includes traditional Half-Life elements such as exploration, puzzles, combat, and story. While it is primarily a first-person shooter, it adds elements of the survival horror genre, as health and ammo are more scarce, and includes frightening encounters." DOfficial="https://www.half-life.com/en/alyx" DSteam="https://store.steampowered.com/app/546560/HalfLife_Alyx/" DGenre="First Person Shooter" /></div>
      <div className={isVisibleArise?"block":"hidden"}><DetailedContainer DTitle="Tales of Arise" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fta2.jpg?alt=media&token=6c87547c-66a9-45f9-95a0-5d4af4fc076f" DYear="2021" DRating="7.5" DAlt="Main Characters of Tales of Arise" DSummary="The Dahnan resistance against the Renan occupation is currently divided into four independent movements spread across the planet. The only realm who lacks a resistance cell is Ganath Haros whose Lord subjugated the entire population, regardless of race." DSteam="https://store.steampowered.com/app/740130/Tales_of_Arise/" DGenre="Action Role Playing" DOfficial="https://en.bandainamcoent.eu/tales-of/tales-of-arise"/></div>
      <div className={isVisibleMount?"block":"hidden"}><DetailedContainer DTitle="Mount & Blade II: Bannerlord" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fmb2.jpg?alt=media&token=05897538-34e4-4704-92ee-fff16a87ccf4" DYear="2022" DRating="9.2" DAlt="MBII" DSummary="Mount & Blade II: Bannerlord is set on the fictional continent of Calradia, 173 years before Mount & Blade: Warband, during the decline of the Calradic Empire and the formation of the predecessors of the factions that appear in Warband." DSteam="https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/" DGenre="Strategy Action" DOfficial="https://www.taleworlds.com/en/Games/Bannerlord"/></div>
      <div className="text-center text-bold text-3xl pt-8 hover:text-white"><h4>New Games</h4></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 ">
          <div onClick={showO}><Container showTitle="Forza Motorsport" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fforza.jpg?alt=media&token=4ab19bf3-ef36-48a5-aa73-8ec7a46377e7" showPlatform="Windows Xbox" showGenre="Racing" DAlt="Yellow Car" showDescription="Forza Motorsport features more than 500 vehicles and 800 upgrades, as well as 20 newly built tracks." showPublisher="	Xbox Game Studios" showAlt="Forza Motorsport"/></div>
          <div onClick={showV}><Container showTitle="Need for Speed Unbound" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfsu.jpg?alt=media&token=f43c78ef-86e9-44c0-a364-14d2616e2d24" showPlatform="PS5 Windows Xbox" showGenre="Racing" showDescription="The game features an art style that merges artistic elements like cel-shading and graffiti art with the more realistic art style of other Need for Speed games." showPublisher="Electronic Arts" showAlt="Red Car Yellow Graffiti"/></div>
      </div>
      <div className={isVisibleForza?"block":"hidden"}><DetailedContainer DTitle="Forza Motorsport" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Ffm3.jpg?alt=media&token=81309324-c6b0-493f-b623-5d63b06052f5" DYear="2020" DAlt="Cars" DRating="6.3" DSummary="Out-build the competition in the all-new career. Race your friends in adjudicated multiplayer events. Compete in over 500 cars on world-famous tracks with cutting edge AI, advanced physics, and tire and fuel strategy." DSteam="https://store.steampowered.com/app/2440510/Forza_Motorsport/" DGenre="Racing" DOfficial="https://forza.net/motorsport"/></div>
      <div className={isVisibleNeed?"block":"hidden"}><DetailedContainer DTitle="Need For Speed Unbound" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfs2.jpg?alt=media&token=81497fb2-8442-4926-8a9f-47f3db5bcf7f" DYear="2019" DAlt="Yellow Car facing Police Cars" DRating="6.5" DSummary="Race to the top, definitely don’t flop. Outsmart the cops, and enter weekly qualifiers for The Grand: the ultimate street race. Pack your garage with precision-tuned, custom rides, and light up the streets with your style." DSteam="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/" DGenre="Racing" DOfficial="https://www.ea.com/games/need-for-speed/need-for-speed-unbound"/></div>
      <About/>
      <Contact/>
    </React.Fragment>
  </isVisibleGenshinContext.Provider>
  )
}

export default MainSection
export const isVisibleGenshinContext = createContext();