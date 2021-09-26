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
                <p>Generic: {generic}</p>
                <p>Birth Place: {originate}</p>
                <p>Scientific Name: <i>{latin}</i></p>
                <p>Energy: {calories} kCal <b>/ 100g</b>.</p>
                <button className='add-btn' onClick={()=> props.handelAddToCart(props.fruit)}><i className="fas fa-shopping-cart"></i>Add Fruit</button>
                <i className="fab fa-blogger-b"></i>
                <i className="fab fa-facebook"></i>
            </div>        
        </div>
    );
};

export default Fruit;