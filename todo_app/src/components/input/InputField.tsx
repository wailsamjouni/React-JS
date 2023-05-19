import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
      className="input"
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        placeholder="Enter a task"
        className="input__box"
      />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
