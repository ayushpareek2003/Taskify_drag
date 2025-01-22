import React from 'react'
import "./styles.css";

interface props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}


const Inputbox:React.FC<props> = ({todo,setTodo,handleAdd}:props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input type="input"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}

      placeholder="Enter your task" className='inputbox'/>
      <button className="submitB" type="submit">go</button>
    </form>
  )
}

export default Inputbox