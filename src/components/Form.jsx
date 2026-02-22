export default function Form() {
  return (
    <form className="box">
      <span className="checkbox">
        <input type="checkbox" />
      </span>
      <input
        type="text"
        name="task"
        value=""
        aria-label="Create a new task"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
