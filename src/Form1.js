import React from 'react';

const Form1 = props => {
    return (
        <>
        <input type='text' name='name' placeholder='name' onChange={props.change}></input><br></br>
        <input type='text' name='email' placeholder='email' onChange={props.change}></input><br></br>
        <input type='text' name='password' placeholder='password' onChange={props.change}></input><br></br>
        <button onClick={props.next}>Next</button>
        </>
    )
}

export default Form1;