import React, { useState } from 'react';

function ContentBoxinput(props) {
  //  var message='Inside Message'
  //status is State variable  setStatus is function
  const [data,setData]=useState(" Axis ")
 // setStatus(10)  //to change state variable
  const handleChange=(e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return <div style={{border:'2px solid black'}}>
     
      <input type="text" value={data} onChange={handleChange} />
     
      
  </div>;
}
// var ContentBox=(props)=>{
//     return <h2>{props.message}</h2>
// }
export default ContentBoxinput;
// function addition(op1,op2){
//     return op1+op2
// }