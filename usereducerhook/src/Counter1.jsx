import React, {useReducer} from 'react'

const Counter1 = () => {
  const intialstate = 0;
  const reducer = (state, action) => {
    switch(action.type){
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }
  const [state , dispatch] = useReducer(reducer, intialstate);
  return (
    <div>
      <h1>Counter - {state}</h1>
      <button onClick={()=> dispatch({type : "increment"})}>increment</button>
      <button onClick={()=> dispatch({type : "decrement"})}>decrement</button>
    </div>
  )
}

export default Counter1
