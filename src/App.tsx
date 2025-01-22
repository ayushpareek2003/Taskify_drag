import React, {useState} from 'react';

import './App.css';
import Inputbox from './components/inputbox';
import {todo} from "./model";
import Showtask from './components/showtask';

const App: React.FC=()=>{

  const [todo,setTodo]=useState<string>("");
  const [todos,setodos]=useState<todo[]>([]);

  console.log(todo);

  const handleadd=(e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setodos([...todos,{id:Date.now(),task:todo,isdone:false}]);
      setTodo("");
    }

  };

  console.log(todos)


  return (
    <div className="App">
        <span className="heading">Taskify</span>
        <Inputbox todo={todo} setTodo={setTodo} handleAdd={handleadd}/>
        <Showtask  todos={todos} setodos={setodos} />

    </div>
  );
}

export default App;
