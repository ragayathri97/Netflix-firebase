import React from 'react'
import "./Player.css"

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""/>
      <iframe width='90%' height='90%'
      src='https://www.youtube.com/embed/InqQJRqGW4'
      title='trailer' frameBorder='o' allowFullScreen></iframe>
    <div class="player-info">
      <p>Published Date</p>
      <p>Name</p>
      <p>Type</p>
    </div>
    </div>
  )
}

export default Player