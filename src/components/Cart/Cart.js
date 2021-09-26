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
            <h3>Add Fruit Item : {totalFruitsAdd}</h3>
            <h3>Calori Gain : {totalCalories.toFixed(2)} Kcal.</h3>
            
        </div>
    );
};

export default Cart;