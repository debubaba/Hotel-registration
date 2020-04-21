import React, { Component } from 'react'
import items from './data.js'
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount(){
        let rooms = this.formatData(items);
        // console.log(rooms);
        let featuredRooms = rooms.filter(room => room.fields.featured === true);
        // console.log(featuredRooms);
        let maxPrice = Math.max(...rooms.map(item =>
             item.fields.price));
        let maxSize = Math.max(...rooms.map(item =>
             item.fields.size));
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
        // console.log(rooms)
    }

    formatData(items){
        let tempItems= items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url);
            let fields = item.fields;
            let room = { fields, images, id };

            return room; //1:55 m
        });
        return tempItems;
    }

    getRoom = (type) => {
        // console.log(type);
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room=>room.fields.slug === type);
        // console.log(tempRooms)
        return room;
        
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox"?
        target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterRooms);
        // console.log(name, value);
    }

    filterRooms = () => {
        // console.log("hello");
        let{
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state

        let tempRooms = [...rooms]; //added all rooms

        //transform from string back to int
        capacity = parseInt(capacity)
        price = parseInt(price)

        //filter by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.fields.type === type)
        }
        //filter by capacity
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity)
        }
         //filter by price
        tempRooms = tempRooms.filter(room => room.fields.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(room => room.fields.size <= maxSize && room.fields.size >= minSize);
        //filter by breakfast
        if(breakfast){
        tempRooms = tempRooms.filter(room => room.fields.breakfast === true);
        }
        //filter by pets
        if(pets){
        tempRooms = tempRooms.filter(room => room.fields.pets === true);
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() 
    {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;


export{RoomProvider, RoomConsumer, RoomContext};