import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer.js'
const Rooms = () => {
  return(
  <>
    <Hero hero="roomsHero">
      <Banner
      title="Our Rooms"
      >
      </Banner>
    </Hero>
    <RoomContainer />
  </>
  )
}

export default Rooms
