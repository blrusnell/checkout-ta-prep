import React from 'react';

const Form2 = props => {
    return (
        <>
        <input type='text' name='address' placeholder='address' onChange={props.change}></input><br></br>
        <input type='text' name='city' placeholder='city' onChange={props.change}></input><br></br>
        <input type='text' name='state' placeholder='state' onChange={props.change}></input><br></br>
        <input type='text' name='zip' placeholder='zip code' onChange={props.change}></input><br></br>
        <button onClick={props.next}>Next</button>
        </>
    )
}

export default Form2;