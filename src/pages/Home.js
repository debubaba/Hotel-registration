import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services.js'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Featured from '../components/Featured.js'

const Home = () => {
  return(
    <>
      <Hero>
        <Banner
        title="Welcome to Adora Hotels!"
        subtitle="Luxurious rooms starting from ₹999!"
        >
          <Link to='/rooms' className="btn-primary">
            Check out our rooms!
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featured />
    </>
  )
}

export default Home
