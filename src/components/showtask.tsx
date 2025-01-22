import React from 'react';
import { todo } from '../model';
import Single from './Single';


interface Props {
  todos: todo[];
  setodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const ShowTask: React.FC<Props> = ({ todos, setodos }: Props) => {
  return (
    <div className='app'>
      <div className="active">
        <span className="todos_Heading">Active</span>
          {todos.map((todo) => (
            <Single 
              todo={todo}  // Passing individual 'todo' object
              key={todo.id}
              todos={todos}
              setodos={setodos}
            />
          ))}


      </div>
      <div className="Pending">
        <span className="todos_Heading2">Completed</span>
          {todos.map((todo) => (
            <Single 
              todo={todo}  // Passing individual 'todo' object
              key={todo.id}
              todos={todos}
              setodos={setodos}
            />
          ))}


      </div>

    </div>
  );
};

export default ShowTask;
