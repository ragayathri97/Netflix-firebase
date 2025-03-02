import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.png"
import bell_icon from "../../assets/bell_icon.png"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div class="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div class="navbar-right">
                <img src= {search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src= {bell_icon} alt="" className='icons' />

                <div class="navbar-profile">
                <img src= {profile_img} alt="" className='profile' />
                <img src= {caret_icon} alt="" className='profile'/>
                </div>

            </div>
        </div>
    )
}

export default Navbar