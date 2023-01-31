import React, { useState } from 'react';
import { FaPlus, FaEquals, FaMinus, FaTimes, FaDivide, FaPercentage, FaBackspace } from "react-icons/fa";

const CalculatorApp = () => {

  const [display, setDisplay] = useState('');
  const [operando1, setOperando1] = useState(0);
  const [operando2, setOperando2] = useState(0);
  const [operador, setOperador] = useState('');
  const [operaciones, setOperaciones] = useState('');

  const handleNumber = ( number ) => {
    //console.log(number);
    //console.log(display.length);

    if (display.length==0) {
      //console.log('Entra');
      if (number>0) {
        setDisplay( `${display}${number}` );
      }
    }
    else{
      setDisplay( `${display}${number}` );
    }
  }

  const handleDot = () => {
    if (!display.includes('.'))
      setDisplay( `${display}.` );
  }

  const handlePlus = () => {
    if (isNumeric(display)) {
      console.log('entra');
      setOperando1( display );
      setOperaciones(`${operaciones}${display}+`);
      setDisplay('');
    }
    //console.log(isNumeric(display));
  }

  const handleOperator = ( operator ) => {
    if (isNumeric(display)) {
      setOperando1( display );
      setOperaciones(`${operaciones}${display}${operator}`);
      setDisplay('');
    }
  }

  const handleEqual = () => {
    if (isNumeric(display)) {
      setOperando1( display );
      setOperaciones(`${operaciones}${display}=${ evaluateMathExpression(`${operaciones}${display}`) }`);
      setDisplay( evaluateMathExpression(`${operaciones}${display}`) );
    }
  }

  const handleClear = () => {
    setDisplay('');
    setOperaciones('');
  }
  
  const isNumeric = (num) => {
    return !isNaN(num);
  }

  const evaluateMathExpression = (str) => {
    return Function(`'use strict'; return (${str})`)();
  }

  return (
    <>
        <div className='h1'>CalculatorApp</div>
        <div className='row'>
          <div className='col-12 text-end'>
            <label className='text-secondary fs-3'>{ operaciones }</label>
          </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <input type="text" name="display" id="display" className='form-control text-end fs-1' placeholder='0' value={ display } />
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg btn-danger w-100' onClick={ () => handleClear() }>C</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100'><FaBackspace /></button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100'><FaPercentage /></button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100' onClick={ ()=>handleOperator('/') } ><FaDivide /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(7)}>7</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(8)}>8</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(9)}>9</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100' onClick={ ()=>handleOperator('*') } ><FaTimes /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(4)}>4</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(5)}>5</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(6)}>6</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100' onClick={ ()=>handleOperator('-') } ><FaMinus /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(1)}>1</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(2)}>2</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(3)}>3</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100' onClick={ ()=>handlePlus() }><FaPlus /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <button className='btn btn-lg btn-info w-100' onClick={()=> handleNumber(0)} >0</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-warning w-100' onClick={ ()=> handleDot() }>.</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-primary w-100' onClick={ ()=> handleEqual() }><FaEquals /></button>
            </div>
        </div>
    </>
  )
}

export default CalculatorApp