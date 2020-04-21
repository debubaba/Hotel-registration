import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Error = () => {
  return(
    <Hero>
      <Banner
      title="Error :("
      subtitle="This page does not exist"
      >
        <Link to='/' className="btn-primary">
          Head back to Home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
