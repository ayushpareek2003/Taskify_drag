import React, { useEffect, useRef, useState } from 'react';
import { todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: todo;
  todos: todo[];
  setodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const Single: React.FC<Props> = ({ todo, todos, setodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.task);

  const handleDone = (id: number) => {
    setodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault(); // Prevent page reload
    setodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editTodo } : todo
      )
    );
    setEdit(false); // Exit edit mode
  };

  const inputref=useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputref.current?.focus();

  },[edit])

  return (
    <div>
      <form
        className="todos_single"
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            ref={inputref}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos_single--text"
          />
        ) : todo.isdone ? (
          <s className="todos_single--text">{todo.task}</s>
        ) : (
          <span className="todos_single--text">{todo.task}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => handleDelete(todo.id)}
          >
            <AiFillDelete />
          </span>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !todo.isdone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span
            className="icon"
            onClick={() => handleDone(todo.id)}
          >
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Single;
