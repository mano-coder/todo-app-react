import { useState } from "react";

export default function Form({ newTask }) {
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <form
      className="box"
      onSubmit={(e) => {
        e.preventDefault();
        newTask(inputValue, isCompleted);
        setInputValue("");
        setIsCompleted(false);
      }}
    >
      <span
        className={isCompleted ? "checkbox checked" : "checkbox"}
        onClick={() => setIsCompleted((prevState) => !prevState)}
      >
        <input type="checkbox" />
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
