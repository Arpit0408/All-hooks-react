import React , {useRef} from 'react'

const Focusref = () => {
      const inputref = useRef(null);
    const handleFocus =()=>{
      inputref.current.focus();
    }
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={handleFocus}>foxusbtn</button>
    </div>
  )
}

export default Focusref
