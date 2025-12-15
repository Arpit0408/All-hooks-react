import { useReducer } from "react";
import reducer from "./Usereducer";

const initialValue = 0;

const ReducerHook = () => {


  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <>
        <div className="container">
          <button onClick={() => dispatch({ type: "INC" })}>
           <button>ADD</button>
          </button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>
<button>subtract</button>          </button>
        </div>
      </>
    </>
  );
};


export default ReducerHook;