
import './App.css'
import Usestate from './Components/Usestate'
import UseStateObject from './Components/UseStateObject.jsx'
import UseEffect from './Components/Effect/UseEffect.jsx'
import ClearUp from './Components/Effect/Clearnup.jsx'
import ReducerHook from './Components/Reducer/Reduecr.jsx'
import Useref1 from './Components/Useref/Useref1.jsx'
import Useref2 from './Components/Useref/Useref1.jsx'
import Usememo from './Components/Usememo/Usememo.jsx'
import Uselayout from'./Components/Uselayouteffect/Uselayout.jsx'
import Usecallback from'./Components/Usecallback/Callback.jsx'
import Parent from "./Parent";
function App() {
  const userData = {
    name: "vinod",
    age: 28,
  };

  return (
    <>
     <h1>All hooks</h1>
     <h2>Usestate</h2>
     <Usestate/>
     <h2>Form using Usestate</h2>
     <UseStateObject/>
     <h2>useeffect</h2>
     <UseEffect/>
     <h2>ClearUp</h2>
     <ClearUp/>
     <Parent/>
     <h1>UseReducer hook</h1>
     <ReducerHook/>
     <h1>Userefhook</h1>
     <Useref1/>
     <h1>2</h1>
     <Useref2/>
     <h1>Usememo</h1>
     <Usememo/>
     <h1>uselayout</h1>
     <Uselayout/>
     <h1>Usecallback</h1>
     <Usecallback/>
    </>
  )
}

export default App
