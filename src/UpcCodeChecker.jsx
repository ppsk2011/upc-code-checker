import React, { useState } from 'react';
import { checkUpc } from './UpcCheckService'
import './upcCodeChecker.css'
const UpcCodeChecker = () => {
    const [upcCode, setUpcCode] = useState('');
    const [validationArr, setValidationArr] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', upcCode)
        setValidationArr(checkUpc(upcCode))
    }
    const handleChange = (e) => {
        setUpcCode(e.target.value)
        console.log(upcCode);
    }
    return (
        <div >
            <form  onSubmit={handleSubmit}>
                <div>UPC Code :</div>
                <input type='text' onChange={handleChange} placeholder='enter only numbers' minLength='12' maxLength='12' />
                <button type='submit'> check UPC code</button>
            </form>
            {validationArr && validationArr.length>0 && validationArr.map((item,index)=>(
                <div className='validation' key={index}>
                <div className={item.result}>The UPC Code is : {item.result}</div>
                <div>Sum of odd digits : {item.oddSum}</div>
                <div>Odd digits sum multiplied by 3 : {item.multipliedSum}</div>
                <div>Sum of even digits : {item.evenSum}</div>
                <div> Even digits + multiplied odd digits: {item.addedSum}</div>
                <div> Calculated check Digit to compare with last number {item.checkDigit}</div>
                </div>

            ))}
        </div>
    )
}

export default UpcCodeChecker;