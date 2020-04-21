import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context.js'
import Title from '../components/Title.js'

const getUniqueValues = (items, value) => {
    // console.log(items, value);
    return [...new Set(items.map(item => item.fields[value]))]
    //Set because set utakes only unique values
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    // console.log(context);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    let types = getUniqueValues(rooms, 'type');
    types = ['all', ...types];
    // console.log(types);
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let peeps = getUniqueValues(rooms, 'capacity');
    peeps = peeps.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title= "search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {peeps}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: ₹{price}</label>
                    <input 
                    type="range" 
                    name="price" 
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange} 
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                        type="number" 
                        name="minSize" 
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input" />
                        <input 
                        type="number" 
                        name="maxSize" 
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast" 
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                        <br />
                        <input
                        type="checkbox"
                        name="pets"
                        id="pets" 
                        checked={pets}
                        onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
