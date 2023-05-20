import React, { useEffect, useRef, useState } from "react";
import "./SingleTodo.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from "../model/model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number): void => {
    const myTodos = todos.filter((todo) => todo.id !== id);
    setTodos(myTodos);
  };

  const handleEdit = (event: React.FormEvent, id: number): void => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      onSubmit={(event) => handleEdit(event, todo.id)}
      className="singletodo"
    >
      {edit ? (
        <input
          ref={inputRef}
          className="singletodo__input"
          value={editTodo}
          onChange={(event) => setEditTodo(event.target.value)}
          type="text"
        />
      ) : todo.isDone ? (
        <s className="singletodo__text">{todo.todo}</s>
      ) : (
        <span className="singletodo__text">{todo.todo}</span>
      )}

      <div className="icon">
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
          className="edit"
        >
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)} className="delete">
          <MdDelete />
        </span>
        <span onClick={() => handleDone(todo.id)} className="done">
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
