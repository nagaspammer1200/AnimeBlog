import React,{ createContext,useState} from 'react'
import About from './About'
import DetailedContainer from './DetailedContainer'
import Container from './Container'

function MainSection() {
  const [isVisibleGenshin,setIsVisibleGenshin] = useState(false)
  const [isVisibleHalf,setIsVisibleHalf] = useState(false)
  const [isVisibleArise,setIsVisibleArise] = useState(false)
  const [isVisibleMount,setIsVisibleMount] = useState(false)
  const [isVisibleForza,setIsVisibleForza] = useState(false)
  const [isVisibleNeed,setIsVisibleNeed] = useState(false)
  const [isVisibleContainer,setIsVisibleContainer] = useState(false)
  const showCat = () => {
    setIsVisibleGenshin(true)
    setIsVisibleContainer(true)
  }
  const showBC = () => {
    setIsVisibleHalf(true)
    setIsVisibleContainer(true)
  }
  const showO = () => {
    setIsVisibleForza(true)
    setIsVisibleContainer(true)
  }
  const showV = () => {
    setIsVisibleNeed(true)
    setIsVisibleContainer(true)
  }
  const showA = () => {
    setIsVisibleArise(true)
    setIsVisibleContainer(true)
  }
  const showM = () => {
    setIsVisibleMount(true)
    setIsVisibleContainer(true)
  }

  return (
  <isVisibleGenshinContext.Provider value={{isVisibleGenshin,setIsVisibleGenshin,isVisibleHalf,setIsVisibleHalf,isVisibleForza,setIsVisibleForza,isVisibleNeed,setIsVisibleNeed,setIsVisibleArise,setIsVisibleMount,isVisibleContainer,setIsVisibleContainer}}>
    <React.Fragment>
      <div className={isVisibleContainer?"hidden":"text-center text-bold text-3xl pt-8 hover:text-white transition delay-110 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"}><h4>Popular Games</h4></div>
      <div className={isVisibleContainer?"hidden":"grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32 mb-3"}>
          <div onClick={showBC}><Container showTitle="Genshin Impact" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fgenshin%20(1).jpg?alt=media&token=4b4e602d-1439-4017-8ae4-4d96e3bb8979" showGenre="Role-Playing Game" showDescription="Genshin Impact takes place in the fantasy world of Teyvat, home to seven nations, each of which is tied to a different element and ruled by a different god (archon)." showPublisher="miHoYo"  showPlatform="PS4 PS5 Android" showAlt="Genshin Impact"/></div>
          <div onClick={showCat}><Container showTitle="Half Life Alyx" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fhla.jpg?alt=media&token=99e210e0-068f-41ac-b26c-f37d16a64b91" showPlatform="Windows Linux" showGenre="First Person Shooter" showDescription="Players control the Resistance member Alyx Vance as she and her father Eli Vance fight the Combine, an alien empire that has conquered Earth." showPublisher="Valve" showAlt="Half Life Alyx"/></div>
          <div onClick={showA}><Container showTitle="Tales of Arise" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fta.jpeg?alt=media&token=c80e41f7-18ae-48b7-980e-72457b89b1ff" showPlatform="PS5 PS4 Windows Xbox" showGenre="Action Role-Playing" showDescription="Arise takes place in a setting divided between the medieval world. Lenegis invaded and conquered Dahna, subsequently enslaving the population and dividing the land into five isolated realms." showPublisher="Bandai Namco Entertainment" showAlt="Tales of Arise"/></div>
          <div onClick={showM}><Container showTitle="Mount & Blade II: Bannerlord" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fmb.jpeg?alt=media&token=0e172b99-7e36-4a0c-8671-7ff3be06bad5" showPlatform="Windows Linux" showGenre="Strategy Action" showDescription="Bannerlord takes place 210 years before its predecessor, with a setting inspired by the Migration Period. Bannerlord was announced in 2012." showAlt="Mount & Blade: Bannerlord" showPublisher="TaleWorlds Entertainment"/></div>
      </div>
      <div className={isVisibleHalf?"block":"hidden"}><DetailedContainer DTitle="Genshin Impact" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fgi2.jpg?alt=media&token=a3a0f548-c4ec-4fbf-8dcf-d9b6ec5d9e57" DYear="2020" DAlt="Genshin Impact Environment" DRating="8.6" DSummary="In Genshin Impact, explore a vast open world of fantasy and adventure. Play as one of four interchangeable characters, each with unique abilities and strengths. Switch between them seamlessly during combat to unleash devastating combos. Level up and enhance your characters' abilities through a deep crafting and upgrade system. Discover hidden secrets, battle fearsome enemies, and unravel the mysteries of Teyvat in this action RPG with a rich storyline and stunning visuals." DOfficial="https://ys.mihoyo.com/main" DGenre="Role-Playing, Anime" /></div>
      <div className={isVisibleGenshin?"block":"hidden"}><DetailedContainer DTitle="Half Life Alyx" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fhla2.jpg?alt=media&token=6ca9cb41-c3b4-46b5-bf5e-9bdd796aec93" DYear="2020" DRating="8.4" DAlt="Half Life Alyx Environment" DSummary="Immerse yourself in the world of Half-Life: Alyx, a VR-exclusive prequel to Half-Life 2. Play as Alyx Vance, fighting alongside her father Eli to resist the Combine's occupation. Explore richly detailed environments, engage in intense combat, and solve puzzles to uncover the secrets of City 17. With advanced VR mechanics and a gripping narrative, Half-Life: Alyx is a must-play for fans of the series." DOfficial="https://www.half-life.com/en/alyx" DSteam="https://store.steampowered.com/app/546560/HalfLife_Alyx/" DGenre="First Person Shooter" /></div>
      <div className={isVisibleArise?"block":"hidden"}><DetailedContainer DTitle="Tales of Arise" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fta2.jpg?alt=media&token=6c87547c-66a9-45f9-95a0-5d4af4fc076f" DYear="2021" DRating="7.5" DAlt="Main Characters of Tales of Arise" DSummary="Embark on a journey to free the planet of Renan from the oppressive forces of the Renan Empire in Tales of Arise. Explore a vast open world, battle fearsome enemies, and uncover the secrets of the planet's past. With a deep combat system, engaging characters, and a rich storyline, Tales of Arise is a must-play for fans of JRPGs." DSteam="https://store.steampowered.com/app/740130/Tales_of_Arise/" DGenre="Action, Role-Playing" DOfficial="https://en.bandainamcoent.eu/tales-of/tales-of-arise"/></div>
      <div className={isVisibleMount?"block":"hidden"}><DetailedContainer DTitle="Mount & Blade II: Bannerlord" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fmb2.jpg?alt=media&token=05897538-34e4-4704-92ee-fff16a87ccf4" DYear="2022" DRating="9.2" DAlt="MBII" DSummary="Conquer the medieval world of Mount & Blade II: Bannerlord, a sandbox action RPG. Build your own army, forge alliances, and engage in epic battles to claim dominance. With a complex combat system, deep character customization, and a vast open world, Mount & Blade II: Bannerlord offers endless possibilities for strategy and adventure." DSteam="https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/" DGenre="Strategy, Action" DOfficial="https://www.taleworlds.com/en/Games/Bannerlord"/></div>
      <hr />
      <div className={isVisibleContainer?"hidden":"text-center text-bold text-3xl pt-8 hover:text-white transition delay-110 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120"}><h4>New Games</h4></div>
      <div className={isVisibleContainer?"hidden":"grid grid-cols-1 sm:grid-cols-2 gap-x-2 ps-20 sm:ps-32"}>
          <div onClick={showO}><Container showTitle="Forza Motorsport" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fforza.jpg?alt=media&token=4ab19bf3-ef36-48a5-aa73-8ec7a46377e7" showPlatform="Windows Xbox" showGenre="Racing" DAlt="Yellow Car" showDescription="Forza Motorsport features more than 500 vehicles and 800 upgrades, as well as 20 newly built tracks." showPublisher="	Xbox Game Studios" showAlt="Forza Motorsport"/></div>
          <div onClick={showV}><Container showTitle="Need for Speed Unbound" showImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfsu.jpg?alt=media&token=f43c78ef-86e9-44c0-a364-14d2616e2d24" showPlatform="PS5 Windows Xbox" showGenre="Racing" showDescription="The game features an art style that merges artistic elements like cel-shading and graffiti art with the more realistic art style of other Need for Speed games." showPublisher="Electronic Arts" showAlt="Red Car Yellow Graffiti"/></div>
      </div>
      <div className={isVisibleForza?"block":"hidden"}><DetailedContainer DTitle="Forza Motorsport" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Ffm3.jpg?alt=media&token=81309324-c6b0-493f-b623-5d63b06052f5" DYear="2020" DAlt="Cars" DRating="6.3" DSummary="Get ready to speed into the world of Forza Motorsport, a realistic racing simulator. Collect and customize over 700 cars, race on iconic tracks, and compete against the best drivers in the world. With stunning graphics, realistic physics, and a dynamic weather system, Forza Motorsport is the ultimate racing experience." DSteam="https://store.steampowered.com/app/2440510/Forza_Motorsport/" DGenre="Racing" DOfficial="https://forza.net/motorsport"/></div>
      <div className={isVisibleNeed?"block":"hidden"}><DetailedContainer DTitle="Need For Speed Unbound" DImage="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Home%2Fnfs2.jpg?alt=media&token=81497fb2-8442-4926-8a9f-47f3db5bcf7f" DYear="2019" DAlt="Yellow Car facing Police Cars" DRating="6.5" DSummary="Live the life of a street racer in Need for Speed: Unbound, an open-world racing game. Explore the city of Lakeshore, customize your ride, and take on rival crews in high-stakes races. With a rich narrative, stunning visuals, and a dynamic soundtrack, Need for Speed: Unbound is the ultimate adrenaline rush." DSteam="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/" DGenre="Racing" DOfficial="https://www.ea.com/games/need-for-speed/need-for-speed-unbound"/></div>
      <About/>
    </React.Fragment>
  </isVisibleGenshinContext.Provider>
  )
}

export default MainSection
export const isVisibleGenshinContext = createContext();