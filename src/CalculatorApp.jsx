import React, { useState, useEffect } from 'react';
import { FaPlus, FaEquals, FaMinus, FaTimes, FaDivide, FaPercentage, FaBackspace } from "react-icons/fa";
import WebFont from 'webfontloader';

const CalculatorApp = () => {

  const [display, setDisplay] = useState('');
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
      setOperaciones(`${operaciones}${display}+`);
      setDisplay('');
    }
    //console.log(isNumeric(display));
  }

  const handleOperator = ( operator ) => {
    if (isNumeric(display)) {
      setOperaciones(`${operaciones}${display}${operator}`);
      setDisplay('');
    }
  }

  const handleEqual = () => {
    if (isNumeric(display)) {
      setOperaciones(`${operaciones}${display}=${ evaluateMathExpression(`${operaciones}${display}`) }`);
      setDisplay( evaluateMathExpression(`${operaciones}${display}`) );
    }
  }

  const handleClear = () => {
    setDisplay('');
    setOperaciones('');
  }

  const handleBack = () => {
    setDisplay( display.slice(0, -1) );
  }
  
  const isNumeric = (num) => {
    return !isNaN(num);
  }

  const evaluateMathExpression = (str) => {
    return Function(`'use strict'; return (${str})`)();
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Orbitron', 'VT323', 'Oswald', 'Noto Sans Symbols 2', 'Chakra Petch']
      }
    });
   }, []);

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
                <input type="text" name="display" id="display" className='form-control text-end fs-1 chakra-font' placeholder='0' value={ display } />
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg btn-danger bg-gradient w-100' onClick={ () => handleClear() }><strong>C</strong></button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=> handleBack() }><FaBackspace className='text-white' /></button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100'><FaPercentage className='text-white' /></button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=>handleOperator('/') } ><FaDivide className='text-white' /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(7)}>7</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(8)}>8</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(9)}>9</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=>handleOperator('*') } ><FaTimes className='text-white' /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(4)}>4</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(5)}>5</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(6)}>6</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=>handleOperator('-') } ><FaMinus className='text-white' /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(1)}>1</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(2)}>2</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(3)}>3</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=>handlePlus() }><FaPlus className='text-white' /></button>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <button className='btn btn-lg bg-info bg-gradient w-100' onClick={()=> handleNumber(0)} >0</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg btn-warning bg-gradient w-100' onClick={ ()=> handleDot() }>.</button>
            </div>
            <div className='col-3'>
                <button className='btn btn-lg bg-primary bg-gradient w-100' onClick={ ()=> handleEqual() }><FaEquals className='text-white' /></button>
            </div>
        </div>
    </>
  )
}

export default CalculatorApp;