import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div class="hero">
            <img src={hero_banner} alt="" className='banner-img' />
        <div class="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Synopsis A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.</p>
       
        <div class="hero-btns">
            <button className='btn'><img src={play_icon} alt=""/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
        </div>
        <TitleCards />
        </div>
        </div>

        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Pics for You"}/>

        </div>
    </div>
  )
}

export default Home