import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const[fruits,setFruits] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('./fruits.JSON')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFruits(data)
        })
    },[])
    const handelAddToCart = fruit => {
        const newCart = [...cart,fruit];
        setCart(newCart);
    }
    return (
        <div className='fruits-container'>
            <div className='fruit-container'>
                {
                    fruits.map(fruit => <Fruit
                    key = {fruit.id}
                    fruit={fruit}
                    handelAddToCart={handelAddToCart}
                    >
                    </Fruit>)
                }

            </div>
            <div className='fruit-cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Fruits;