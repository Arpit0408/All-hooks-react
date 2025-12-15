import React ,{useRef} from 'react'

const StartStoptTimer = () => {
    const intervalref = useRef(null);
    const count = useRef(0); // to keep track of the counter logi
    
    const startTimer =()=>{
        if(!intervalref.current){
            intervalref.current = setInterval(() =>{
                console.log('running',intervalref.current, count.current++);
            },1000)
        }

    }
    const stopTimer =()=>{
        clearInterval(intervalref.current);
        intervalref.current = null
    }
  return (
    <div>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default StartStoptTimer
