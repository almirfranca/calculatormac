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
    const value = parseFloat(num);
    const result = calculate(num, oldNum, operator);
    setNum(result)
    
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
            <ButtonNum value="AC" onClick={clearInput}/>
            <ButtonNum value="+/-" onClick={togglePositiveNegative}/>
            <ButtonNum value="%" onClick={percentage}/>
            <ButtonNum value="7" onClick={inputNum}/>
            <ButtonNum value="8" onClick={inputNum}/>
            <ButtonNum value="9" onClick={inputNum}/>
            <ButtonNum value="4" onClick={inputNum}/>
            <ButtonNum value="5" onClick={inputNum}/>
            <ButtonNum value="6" onClick={inputNum}/>
            <ButtonNum value="1" onClick={inputNum}/>
            <ButtonNum value="2" onClick={inputNum}/>
            <ButtonNum value="3" onClick={inputNum}/>
            <ButtonZero value="0" onClick={inputNum}/>
            <ButtonNum value="," onClick={changeSemicolons}/>
          </AlphaNumerics>
          <MathematicalOperators>
            <ButtonExp value={<LuDivide/>} onClick={handleOperator}/>
            <ButtonExp value="x" onClick={handleOperator}/>
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

/*

const renderizacao = {
  value: "AC",
  function: clearInput
}

{
  renderizacao.map((value, function) => {
    return (
      <ButtonNum value={value} onClick={function}/>
    )
  })
} 

*/