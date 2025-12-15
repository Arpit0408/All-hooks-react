import React ,{useState, useRef, useEffect} from 'react'

const Countrender = () => {
    const [count, setCount] =useState(0)
    const renderCount = useRef(0);
    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    }, [count]);
    const renderValue = renderCount.current
  return (
    <div>
    <h4>usestate count value = {count}</h4>
    <h4>render count value useref = {renderValue}</h4>
    <button  onClick={()=>setCount(count+1)}>mybtn</button>
    </div>
  )
}

export default Countrender
