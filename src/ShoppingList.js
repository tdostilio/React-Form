import React from 'react';
import ShoppingItem from './ShoppingItem.js';


const ShoppingList = ({itemArray}) => {
    if (itemArray.length === 0) {
        return <ul></ul>
    } else {
        const listItems = itemArray.map((item, idx) => {
        console.log(item)
        return <li key={idx}>{item}</li>
    })    
    return (<ul>{listItems}</ul>)
    }
}

export default ShoppingList