import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalFruitsAdd = 0;
    let totalCalories = 0;
    for(const fruit of cart) {
        if(!fruit.addItem){
            fruit.addItem = 1;
        }
        totalCalories = totalCalories + fruit.calories *  fruit.addItem;
        totalFruitsAdd = totalFruitsAdd + fruit.addItem;
    }
    return (
        <div>
            <h3>Fruit's Item : <span>{totalFruitsAdd}</span></h3>
            <p>Enargy : <span>{totalCalories.toFixed(2)}</span> Kcal.</p>
            
        </div>
    );
};

export default Cart;