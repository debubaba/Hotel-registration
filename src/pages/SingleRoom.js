import React, {Component} from 'react'
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context.js'
import StyledHero from '../components/styledHero.js'

export default class SingleRoom extends Component{
  constructor(props){
    super(props)
    // console.log(this.props)
    this.state= {
      type: this.props.match.params.type
    }
  }  
  static contextType = RoomContext;
  // componentDidMount(){ }
  render(){
    const {getRoom} = this.context;
    // console.log(this.state.type);
    const rooms = getRoom(this.state.type);
    // console.log(rooms);
    if(!rooms){
      return <div className="error">
        <h3>No such rooms available :/</h3>
        <Link to='/rooms' className="btn-primary">
          Check out rooms we do have :)
        </Link>
      </div>
    }
    const {
      name,
      description, 
      capacity, 
      size, 
      price,
      breakfast,
      pets,
      extras
    } = rooms.fields;
    const {
      images
    } = rooms;
    const [mainImg, ...displayImg] = images;
    //console.log(room)
    return(
    <>
      <StyledHero img={mainImg} hero='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className="btn-primary">
            See other rooms
          </Link>
        </Banner>
      </StyledHero>
      <section>
        <div className="single-room-images">
          {displayImg.map((item,index)=>{
            return <img key={index} src={item} alt={name} />
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ₹{price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>Max-capacity:{
              capacity>1? `${capacity} people`:`${capacity} person`
            }</h6>
            <h6>{pets?"pets allowed":"no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item,key)=>{
              return <li key={key}>-> {item}</li>
            })}
          </ul>
      </section>
    </>
    )
  }
}
