import React , {useReducer} from 'react'

const Todo = () => {
    const initialstate = {
        todos: [],
        todoinput: ''
    };
    const reducer = (state, action) => {
        switch(action.type){
            case 'add':
           if(state.todoinput.trim() === '') return state; 
                return {
                    ...state,
                    todos: [...state.todos, state.todoinput],
                    todoinput: ''
                };
            
                case 'remove':
                return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
                case 'set_input':
                return {...state, todoinput: action.payload};
            default:
                return state;
        }
    }
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <input type="text" placeholder='enter todo here' value={state.todoinput} onChange={(e) => dispatch({type:'set_input', payload:e.target.value})} />
      <button onClick={()=> dispatch({type:'add'})}>Add</button>

      <br />

      <div>
        <h2>Todo List</h2>
        <ul>
           {state.todos.map((todoa, index)=> (
            <li key={index}>{todoa} <button onClick={()=> dispatch({type:'remove', payload:index})}>remove</button></li>
           ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
