
import React from 'react'
import RoomsFilter from './RoomFilter.js'
import RoomsList from './RoomList.js'
import {RoomConsumer} from '../context.js'
import Loading from './Loading.js'

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) =>{
                    // console.log(value);
                    const {
                        loading,
                        sortedRooms,
                        rooms
                    } = value;
                    if(loading){
                        return<Loading />;
                    }
                    return(
                    <>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </>
                    )
                }
            }
        </RoomConsumer>
       
    )
}
