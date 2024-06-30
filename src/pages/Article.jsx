import React,{ createContext,useState} from 'react'
import Navbar from '../components/common/Navbar'
import Contact from '../components/common/Contact'
import BoxComponent from '../components/Article/BoxComponent'
import TextComponent from '../components/Article/TextContainer'

function Article() {

  const [showTiles,setIsTiles] = useState(false)
  const [showTI,setIsTI] = useState(false)
  const [showLeague,setIsLeague] = useState(false)
  const [showSteam,setIsSteam] = useState(false)
  const [showSpider,setIsSpider] = useState(false)
  const [showApex,setIsApex] = useState(false)
  const [showLGD,setIsLGD] = useState(false)
  const showLGDBlock = () => {
    setIsTiles(true)
    setIsLGD(true)
  }
  const showTIBlock = () => {
    setIsTiles(true)
    setIsTI(true)
  }
  const showLeagueBlock = () => {
    setIsTiles(true)
    setIsLeague(true)
  }
  const showApexBlock = () => {
    setIsTiles(true)
    setIsApex(true)
  }
  const showSteamBlock = () => {
    setIsTiles(true)
    setIsSteam(true)
  }
  const showSpiderBlock = () => {
    setIsTiles(true)
    setIsSpider(true)
  }
 
  return (
    <isBoxListVisible.Provider value={{showLGD,setIsLGD,setIsTiles,showLGDBlock,showTI,setIsTI,showLeague,setIsLeague,showApex,setIsApex,showSteam,setIsSteam,showSpider,setIsSpider,showLeagueBlock,showApexBlock,showTIBlock,showSteamBlock,showSpiderBlock}}>
      <React.Fragment>
          <Navbar/>
          <div className="bg-gradient-to-r from-cyan-600 to-green-400 text-center p-16">
          <div className={showLGD?"block":"hidden"}><TextComponent TextTitle="LGD Roster to Disband Due to Lack of Results at The International 2024" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flgd4.jpg?alt=media&token=62f35d79-ec7f-4b75-9fce-4fd611543f75" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flgd5.webp?alt=media&token=88bf479b-2fd6-49d6-9c37-48a1aea9af0b" TextImg3="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2FScreenshot%20(1539).png?alt=media&token=6b418c02-e655-4255-99d0-baaf95cf8d0d" Text1="LGD Esports, a stalwart in the Dota 2 scene, faces an uncertain future. If they fail to meet expectations at The International 2024, disbandment may be inevitable. The team's underwhelming performances have sparked frustration among fans, who demand more from the Chinese powerhouse. Without a drastic turnaround, LGD's legacy will be tarnished, and a rebuild may be the only option. The pressure is on; can they rise to the challenge or will they succumb to the weight of expectation?" Text2="The pressure to perform is mounting, and the team's legacy hangs in the balance. With the esports industry booming, the stakes are higher than ever. Global investors are watching, and the team's failure to deliver could have far-reaching consequences. The future of LGD Esports hangs precariously in the balance." Text3="Their Lineup for the International 2024 Closed Qualifiers are given below:" TextAlt="LGD Roster" TextAlt2="Xiao8 and WhyyouSmile" TextAuthor="Nathan Loganson" TextTime="2" TextGame="Dota 2" TextDate="24th March"/></div>
          <div className={showTI?"block":"hidden"}><TextComponent TextTitle="Latest News on Dota 2 The International 2024 Qualifiers" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fti1.jpg?alt=media&token=9cce65f6-6798-40a2-a07b-02a39e87d95f" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fti2.jpg?alt=media&token=e6d15927-3fa4-4966-b998-4471caaac255"  Text1="The road to Dota 2's The International 2024 is heating up as the regional closed qualifiers are underway. Six teams have already secured their spots via direct invite, but there are 10 spots remaining for aspiring squads through the regional closed qualifiers. The other slots have been distributed between each major region: Western Europe, Eastern Europe, China, North America, South America, and Southeast Asia. No team will want to miss out on a ticket to TI, the greatest tournament in Dota's illustrious circuit." Text2="The Western Europe qualifiers are currently in full swing, with teams like Tundra, Secret, Entity, and OG battling it out for a spot at TI 2024. Meanwhile, in North America, Nouns found revenge over Shopify with a grand final sweep, securing their spot at the prestigious tournament. In China, Azure Ray fell short of a TI spot as Zero and G2 x iG booked their tickets. The qualifiers will continue until June 23, with the final teams set to be determined soon. Stay tuned for more updates on the road to TI 2024!" TextAlt="Dota Pro Circuit" TextAlt2="Team Spirit Victory The International 2023" TextAuthor="Camila Hamilton" TextTime="2" TextGame="Dota 2" TextDate="26th February"/></div>
          <div className={showLeague?"block":"hidden"}><TextComponent TextTitle="T1 become your Worlds 2023 champion!" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flol2.jpg?alt=media&token=90793c72-552c-407b-85bd-a0878b483bec" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flol3.jpg?alt=media&token=24922c86-81a9-4f0c-9b5a-36af6fcd4f17"  Text1="A year after falling short to their compatriots in San Francisco, LCK second seed T1 has gone one better in front of their home fans winning the 2023 League of Legends World Championship in stunning fashion over LPL’s Weibo Gaming 3-0.T1 has completed the LPL gauntlet, eliminating all four of China’s representatives in Bilibili Gaming, LNG Esports, JD Gaming, and finally Weibo to raise the organization’s fourth Summoner’s Cup in a brilliant run to the Gocheok Sky Dome. It’s T1’s first Worlds title since dropping the SK Telecom name in 2019." Text2="The Korean squad didn’t necessarily stick by the meta in the three games. Weibo opted for the Blue side in all three—statistically the far stronger side across the tournament—but T1 proved League isn’t played on the spreadsheets.What was certain from the outset was T1 wouldn’t be holding back in their campaign for the title, pulling ahead of Weibo early in all three games due in part to finals MVP Zeus, who handily won in the top lane over TheShy." TextAlt="T1 Lifitng The Trophy" TextAlt2="Team T1" TextAuthor="Liam Orion" TextTime="3" TextGame="League of Legends" TextDate="15th December"/></div>
          <div className={showApex?"block":"hidden"}><TextComponent TextTitle="Apex Legends Season 20" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fa2.jpg?alt=media&token=bee70180-db76-4e30-8429-365a1f95f69d" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fa3.jpg?alt=media&token=0b5ffcec-9fd5-46b6-acab-0a4d42ac53a0"  Text1="Apex Legends is celebrating its 5th year anniversary and season 20 is bringing about a complete overhaul to the classic battle royale mode. Not only is Apex Legends getting a new performance 120fps mode for consoles, new shield system, and a new leveling system in matches, and more. Here’s what you need to know about Apex Legends Breakout." Text2="Evo Shields were the previous iteration where you could earn new Shield levels by doing specific amounts of damage. The new armor will only upgrade now through the new XP Level system in each match. " TextAlt="Apex Legends" TextAlt2="Apex Legends" TextAuthor="Victoria Gillian" TextTime="4" TextGame="Apex Legends" TextDate="4rth July"/></div>
          <div className={showSteam?"block":"hidden"}><TextComponent TextTitle="Steam Has Grown More Than 150% in India in the Last Five Years" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fs2.jpg?alt=media&token=9d8cdfa1-66f4-4416-bb4e-5fa576e217ec" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fs3.jpg?alt=media&token=16b597dd-15bc-4b7c-b8f5-4c90f641570a"  Text1="India is among the regions where video game distribution service Steam has seen a massive growth of more than 150% when it comes to new users from 2019 to 2024. Gerber outlined Steam’s key growth regions with India showing a more than 150% increase in new users." Text2="Other regions where Steam has experienced 150% growth for new users include Japan, Ecuador, Mexico, Chile, Israel, and Pakistan. Regions where Steam has grown more than 100% include China, Serbia, Spain, the Philippines, Vietnam, Peru, and the U.S. Steam is growing rapidly, with significant user base increases in Asia, Southeast Asia, Central America, and South America over the last five years." TextAlt="Steam Logo Black Background" TextAlt2="Steam Logo UI" TextAuthor="Ray Shaft" TextTime="2" Text3="The talk also highlighted the importance of adding regional language support to Steam so that gamers can use the store in their native language. While Valve does not support Hindi, its rapid growth can be a promising factor. Gerber noted that Steam is working on adding support for more languages, increasing the number of supported languages from 29 at the time of writing. Kassidy also shared a chart of global revenue, showcasing the Year-on-Year growth from 2018 to 2024. Gerber highlighted that Steam has noticed sustained growth even after the bump the platform saw during the pandemic." TextGame="Steam" TextDate="June 14"/></div>
          <div className={showSpider?"block":"hidden"}><TextComponent TextTitle="Marvel's Spider-Man 3: Early Images of Insomniac's Upcoming Game" TextImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fsp3.jpg?alt=media&token=73583fd8-4cac-48eb-a9c4-7ffef4176fd2" TextImg2="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fsp4.png?alt=media&token=712539a3-2e66-4cbe-9c00-649d3ad4f06b"  Text1="Insomniac Games, known for their superhero adventure games, recently found themselves in an unexpected and unfortunate situation. A massive leak, a nightmare for any game developer, unveiled several of its upcoming projects ahead of schedule. Details for games like Venom: The Lethal Protector, Marvel's Wolverine, and X-Men have already made their way online, and now, new screenshots for Marvel's Spider-Man 3 have also surfaced, leaving fans anticipating what's to come." Text2="Leaker Visceral has shared what is purported to be an early look at Marvel's Spider-Man 3. This consists of two intriguing screenshots, introducing a brand-new spider hero, Silk. The images depict a Spider-Woman in two different poses-one casually checking her phone while swinging, and the other, zipping around Central Park. While the game is still in its pre-production stage, these early glimpses are sure to ignite excitement among fans. "Text3="In other news, Marvel's Spider-Man 2 has just received eight new suits in an update. Four of these suits have been designed by American fashion designer Kid Super, featuring sports icons and superstars such as Vini Jr., Lando Norris, and Rina Sawayama co-designers." TextAlt="Black Red Spiderman" TextAlt2="Spiderman" TextAuthor="Victoria Gillian" TextTime="4" TextGame="Spiderman 2" TextDate="2nd October"/></div>
          <div className={showTiles?"hidden":"grid grid-cols-1 gap-8 block sm:grid-cols-2 sm:gap-4"}>
            <div className="p-3" onClick={showLGDBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flgd0.jpg?alt=media&token=38630638-b204-41da-905b-bc70563b61fe" BoxAlt="LGD Ame ROster" BoxTitle="LGD prepares for The International " BoxList1="Multiple Top 5" BoxList2="Most Appearences in Tier 1 Grand Finals" BoxList3="Chinese Powerhouses taking on Western Teams"/></div>
            <div className="p-3" onClick={showTIBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Ftidota.jpg?alt=media&token=46914b0c-185f-4745-b6a7-773088920043" BoxAlt="The International 2024" BoxTitle="Latest News on Dota 2 The International" BoxList1="Western Europe stacked with Teams competing for 2 Slots" BoxList2="OG, Secret, Nigma On Brink of Elmination" BoxList3="EEU Teams compete for 1 Slot"/></div>
            <div className="p-3" onClick={showLeagueBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Flol0.jpg?alt=media&token=d872c407-a7ac-404e-9c33-28cd87d720cf" BoxAlt="Worlds Champions 2023 T1" BoxTitle="T1 become your Worlds 2023 champion!" BoxList1="4 Time Championship title for Faker" BoxList2="Clean Sweep In Grand Finals" BoxList3="Defeated Weibo Gaming 3-0"/></div>
            <div className="p-3" onClick={showApexBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fap0.jpg?alt=media&token=430e68a2-aea1-4374-8f3f-7b9b6cda238a" BoxAlt="Apex Legends Character with Gun" BoxTitle="Apex Legends Season 20" BoxList1="EVO Shields Removed" BoxList2="More Important Gameplay Changes" BoxList3="New Leveling System"/></div>
            <div className="p-3" onClick={showSteamBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fst0.jpg?alt=media&token=733fc108-8482-48e0-a75e-89e382706dff" BoxAlt="Steam" BoxTitle="Steam 150%  Growth in India" BoxList1="150% Growth From 2019 to 2014" BoxList2="Rapid Growth in Asia" BoxList3="Plans on Adding Local Languages"/></div>
            <div className="p-3" onClick={showSpiderBlock}><BoxComponent BoxImg="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/Article%2Fsp0.jpg?alt=media&token=f26a8d65-bd11-422f-bded-0a25c00ac4b0" width="200px" height="200px" BoxAlt="Spiderman Marvels" BoxTitle="Marvel's Spider-Man 3: Early Images" BoxList1="New Spiderman Silk" BoxList2="Update Brings 8 New Suits" BoxList3="Leaker Visceral leaks information"/></div>
          </div>
          </div>
          <Contact/>
      </React.Fragment>
    </isBoxListVisible.Provider>
  )
}

export default Article
export const isBoxListVisible = createContext();