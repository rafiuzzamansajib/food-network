import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const[fruits,setFruits] = useState([]);
    useEffect(() => {
        fetch('./fruits.JSON')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFruits(data)
        })
    },[])
    return (
        <div className='fruits-container'>
            <div className='fruit-container'>
                {
                    fruits.map(fruit => <Fruit
                    key = {fruit.id}
                    fruit={fruit}
                    >
                    </Fruit>)
                }

            </div>
            <div className='fruit-cart-container'>

            </div>
            
        </div>
    );
};

export default Fruits;