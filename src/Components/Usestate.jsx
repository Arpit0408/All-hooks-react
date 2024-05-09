import React from 'react'
import { useState } from 'react'

const Usestate = () => {
  const [count ,setCount]=  useState(0);
  return (
    <>
     <button onClick={()=>setCount(count+1)}>Add</button>
    <div>{count}</div>
    <button onClick={()=>{
        if(count === 0){
        setCount(0);
        }
        else{
        setCount(count-1)}}}>Sub</button>
    </>
   
  )
}

export default Usestate