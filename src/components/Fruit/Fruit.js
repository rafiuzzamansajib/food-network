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
                <p>Fruit: {name}</p>
                <p>Generic: {generic}</p>
                <p>Birth Place: {originate}</p>
                <p>Scientific Name: <i>{latin}</i></p>
                <p>Energy: {calories} kCal</p>
                <button onClick={()=> props.handelAddToCart(props.fruit)}>Add Calori</button>
            </div>        
        </div>
    );
};

export default Fruit;