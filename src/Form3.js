import React from 'react';

const Form3 = props => {
    return (
        <>
        <input type='text' name='ccNumber' placeholder='Credit Card Number' onChange={props.change}></input><br></br>
        <input type='text' name='ccExpiration' placeholder='Expiration Date' onChange={props.change}></input><br></br>
        <input type='text' name='cvv' placeholder='CVV' onChange={props.change}></input><br></br>
        <input type='text' name='ccZip' placeholder='Billing Zip' onChange={props.change}></input><br></br>
        <button onClick={props.submit}>Submit</button>
        </>
    )
}

export default Form3;