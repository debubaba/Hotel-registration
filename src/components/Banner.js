import React from 'react'
import Hero from '../components/Hero'

const Banner = ({children, title, subtitle}) => {
  return(
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
