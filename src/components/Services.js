import React, { Component } from 'react'
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer
} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Title from './Title'

export default class Services extends Component{
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Our in house bar provides cocktails and drinks for all ages to enjoy"
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "The world acclaimed Raxa mountain hike attracts many every year. Our hotel provides guides too ensure an informative and safe hike for you."
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle Van",
        info: "We have our own shuttle service from the airport to our hotel free of cost."
      },
      {
        icon: <FaBeer />,
        title: "Raxa Ale",
        info: "The Adora Hotel is the birthplace of the renowned Raxa Ale and we provide tours to the brewing factory."
      }
    ]
  }
  render(){
    return(
      <section className="services">
        <Title title='Our Services' />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article> 
          })}
        </div>
      </section>
    )
  }
}
