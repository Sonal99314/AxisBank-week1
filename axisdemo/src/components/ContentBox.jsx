import React, { useState } from 'react';

function ContentBox(props) {
  //  var message='Inside Message'
  //status is State variable  setStatus is function
  const [status,setStatus]=useState("intial state status ")
 // setStatus(10)  //to change state variable
  const handleClick=(e)=>{
    console.log(e)
    setStatus("changed the state")
  }
  return <div style={{border:'2px solid black'}}>
     
      <h2>{props.message}</h2>
      <button onClick={handleClick}>
          CLICK HERE

      </button>
      <h3>{status}</h3>
  </div>;
}
// var ContentBox=(props)=>{
//     return <h2>{props.message}</h2>
// }
export default ContentBox;
// function addition(op1,op2){
//     return op1+op2
// }