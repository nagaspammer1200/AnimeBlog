import React from 'react'
import Navbar from '../components/common/Navbar'
import Contact from '../components/common/Contact'
import News from '../components/LatestNews/News'
function Latest() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-cyan-600 to-green-400 text-center">
            <News Image="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/latest%2Fnfs3.jpg?alt=media&token=4fb92ca8-32c8-43c7-9575-6a5e771266f7" Title="Need For Speed Unbound released on Steam" Date="May 25th 2024" Author="Jack Hamilton" Alt="NFS Unbound Cover Art" Summary="Get ready to experience the ultimate racing thrill with NFS Unbound, the latest installment in the Need for Speed series, now available for play. With its stunning visuals and heart-pumping gameplay, NFS Unbound is set to revolutionize the racing genre. Explore the world of Lakeshore, complete with its vibrant streets and hidden shortcuts, and take your racing skills to the next level." SteamLink="https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/" Tag="NFS Unbound"/>
            <hr />
            <News Image="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/latest%2Fdota2.png?alt=media&token=27c313e7-03a3-4acb-b039-b43e7395fb3b" Title="Dota 2 Update 7.36 Released" Date="May 27th 2024" Author="Titan Invictus" Alt="Tidehunter Lion Underlord" Summary="People have been asking about it. They've been waiting for it. They've been guessing for months what would be in it. And now... we're finally shipping it. That's right: Crownfall Act II's fishing game is LIVE! For those of you who didn't just die of adrenaline shock, we also shipped a massive new gameplay patch, which you might want to read up on. Go find out more about 7.36" SteamLink="https://www.dota2.com/patches/7.36" Tag="Dota 2"/>
            <hr />
            <News Image="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/latest%2Fgen%20(1).png?alt=media&token=306566ba-2536-4153-91bc-d552e89952b4" Title="Genshin Impact Two Worlds Aflame, the Crimson Night Fades " Date="Apr 24, 2024" Author="Hannah Miller" Alt="Genshin Impact" Summary="Get Ready for the Latest Update! 'Two Worlds Aflame, the Crimson Night Fades' Version 4.6 is here! Explore new areas in Fontaine, including Nostoi Region and Sea of Bygone Eras! Meet the new 5-star character, Arlecchino, with her powerful Pyro abilities! Discover new equipment, including the Crimson Moon's Semblance polearm and Unfinished Reverie artifact set! Don't miss out on the new Domain of Blessing: Faded Theater! Maintenance compensation and issue fix compensation available for eligible players! Update now and dive into the world of Teyvat like never before! #GenshinImpact #TwoWorldsAflame #Version46" SteamLink="https://genshin.hoyoverse.com/en/news/detail/123426" Tag="Genshin Impact"/>
            <News Image="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/latest%2Fes%20(1).jpg?alt=media&token=ff83e179-6906-4e7b-b5e5-d1642e46449d" Title="Apex Legends Esports World Cup 2024 Kick Off" Date="Apr 29, 2024" Author="Larry Davis" Alt="Apex Legends Esports World Cup" Summary="Get ready for the ultimate battle royale experience! 💥 The TEsports World Cup 2024 Open Qualifiers are here, featuring Pro League and Challenger Circuit competition, three in-person events, and a $5,000,000 USD prize pool! 💸 Open registration for each competition, so assemble your team and show off your skills! 💪 #ApexLegends #TEsportsWorldCup2024 #OpenQualifiers #BattleRoyale #Competition #Prizes" SteamLink="https://liquipedia.net/apexlegends/Esports_World_Cup/2024" Tag="Apex Legends"/>
            <News Image="https://firebasestorage.googleapis.com/v0/b/animeblog-56aed.appspot.com/o/latest%2Flol%20(1).webp?alt=media&token=b1963742-5758-4e53-8f4a-591f4e5542f3" Title="League of Legends 14.10" Date="Apr 29, 2024" Author="Larry Davis" Alt="League of Legends New Update" Summary="We have quite a bit of stuff dropping in patch 14.10: Split 1 end and Split 2 start details, LoR comes to the League client, Champion Mastery updates, tons of Arena adjustments, and LOTS of items and runes changes, alongside a couple of system changes to XP and gold gain. Also keep an eye out for the new Faerie Court skins that are now available!" SteamLink="https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-10-notes/" Tag="League of Legends"/>
        </div>
        <Contact/>
    </React.Fragment>
  )
}

export default Latest