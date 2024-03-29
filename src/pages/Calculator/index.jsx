import React, { useState } from 'react'
import { LuDivide } from 'react-icons/lu'
import { GrStorage } from "react-icons/gr";
import { calculate } from './utils';

import { ButtonNum } from "../../components/ButtonNum"
import { ButtonExp } from "../../components/ButtonExp"
import { ButtonZero } from "../../components/ButtonZero"

import { Container, App, Header, Keyboard, AlphaNumerics, MathematicalOperators, Input, Modal } from "./styles"

export function Calculator() {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState("");
  const [operator, setOperator] = useState("");
  //const [result, setResult] = useState("");
  const [registers, setRegisters] = useState([]);
  const [open, setOpen] = useState(false)
 
  function inputNum(e) {
    let input = e.target.value
    setNum(num + input)
  }

  function clearInput() {
    setNum("")
    setOldNum("")
    setOperator("")
  }

  function togglePositiveNegative() {
    if(num > 0) {
      setNum(parseFloat(-num))
    } else {
      setNum(parseFloat(num * -1))
    }
  }

  function percentage() {
    if(num != "" && oldNum != "") {
      setNum((parseFloat(num)  / 100) * parseFloat(oldNum))
    } else {
      setNum(parseFloat(num) / 100)
    }
  }

  function changeSemicolons (e) {
    let virgule = e.target.value
      //console.log(virgule)
    if( virgule === ",") {
      virgule = "."
      //console.log(virgule)
      setNum(num + virgule)
    }
  }

  function handleOperator(e) {
    const targetOperator = e.target.value
    if (targetOperator === undefined || targetOperator === "[object Object]") {
      setOperator("/")
      setOldNum(num)
      setNum("")
      //console.log(operator)
      return
    } 
    setOperator(targetOperator)
    setOldNum(num)
    setNum("")
  }

  function handleClickEqual() {
    //console.log({num, oldNum, operator})
    const value = parseFloat(num);
    const result = calculate(num, oldNum, operator);
    setNum(result.toString())
    
    const calculation = `${oldNum} ${operator} ${value} = ${result}`;
    setRegisters([...registers, calculation])
    setOperator("")
  }

  function toggleOpenClose() {
    if(open) {
    setOpen(false)
    } else {
    setOpen(true)
    }
  }

 const renderButtons = [
    {value: "AC", method: clearInput},
    {value: "+/-", method: togglePositiveNegative},
    {value: "%", method: percentage},
    {value: "7", method: inputNum},
    {value: "8", method: inputNum},
    {value: "9", method: inputNum},
    {value: "4", method: inputNum},
    {value: "5", method: inputNum},
    {value: "6", method: inputNum},
    {value: "1", method: inputNum},
    {value: "2", method: inputNum},
    {value: "3", method: inputNum},
    {value: "0", method: inputNum},
    {value: ",", method: changeSemicolons}
 ];


React.useEffect(() => {
  //console.log("Entrei aqui")
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    //console.log("desmontando")
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [num, oldNum, operator])


 function handleKeyDown (event) {
  const keyPress = event.key
  //console.log("ola")
  if (!isNaN(keyPress)) {
    setNum((prevNum) => prevNum + keyPress);
  } else if (keyPress === '+' || keyPress === '-' || keyPress === '*' || keyPress === '/') {
    setOperator(keyPress);
    setOldNum(num)
    setNum("")
  } else if (keyPress === 'Enter') {
    handleClickEqual();
  } else if (keyPress === 'Escape') {
    clearInput();
  }
 }

  return(
    <Container>
      <App>
        <Header>
          <div id="buttons">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <button className='open-modal' onClick={toggleOpenClose}> <GrStorage/> </button>
          <div id="input">
            <Input>{num === "" ? 0 : num}</Input>
          </div>
        </Header>
        <Keyboard>
          <AlphaNumerics>
            {renderButtons.map((button, index) => (
              button.value === "0" ? <ButtonZero key={index} value={button.value} onClick={button.method}/> : <ButtonNum  key={index} value={button.value} onClick={button.method}/>
            ))};
          </AlphaNumerics>
          <MathematicalOperators>
            <ButtonExp value={<LuDivide/>} onClick={handleOperator}/>
            <ButtonExp value="*" label="x" onClick={handleOperator}/>
            <ButtonExp value="-" onClick={handleOperator}/>
            <ButtonExp value="+" onClick={handleOperator}/>
            <ButtonExp value="=" onClick={handleClickEqual}/>
          </MathematicalOperators>
        </Keyboard>
      </App>
      <Modal className={open ? "modal-wrapper open" : "modal-wrapper"}>
        <div className='record-equations'>
          <button className='close' onClick={toggleOpenClose}>X</button>
          {registers.map((calculation, index) => (
            <span key={index} className='equations-results'>
              {calculation}
            </span>
          ))}
        </div>
      </Modal>
    </Container>
  )
}


// {value, label(opctional), onClick, type }