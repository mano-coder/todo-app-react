import { useState } from "react";

export default function Form({ newTask }) {
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <form
      className="box"
      onSubmit={(e) => {
        e.preventDefault();
        newTask(inputValue, isCompleted);
        setInputValue("");
      }}
    >
      <span className="checkbox">
        <input
          type="checkbox"
          onChange={() => setIsCompleted((prevState) => !prevState)}
        />
      </span>
      <input
        type="text"
        name="task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Create a new task"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
