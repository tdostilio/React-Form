import React from 'react';


const Button = ({changeHandler}) => (
    <div>
        <input type="submit" value="Add Item" onClick={changeHandler}/>
    </div>
);


export default Button;