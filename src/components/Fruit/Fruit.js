import React from 'react';
import './Fruit.css'

const Fruit = (props) => {
    const{name,img,generic,originate,latin,calories} = props.fruit;
    return (
        <div className='fruit'>
            <div className='fruit-img'>
            <img src={img} alt="" />
            </div>
            <div className='fruit-info'>
                <h4>Fruit: {name}</h4>
                <h4>Generic: {generic}</h4>
                <h4>Birth Place: {originate}</h4>
                <h4>Scientific Name: <i>{latin}</i></h4>
                <h4>Energy: {calories} kCal</h4>
            </div>        
        </div>
    );
};

export default Fruit;