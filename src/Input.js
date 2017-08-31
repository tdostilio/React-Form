import React from 'react';


const Input = ({text, changeHandler}) => (
    <input
        type="text"
        value={text}
        onChange={changeHandler}
    />
)





export default Input;