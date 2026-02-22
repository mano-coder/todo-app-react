export default function Form() {
  return (
    <form class="box">
      <span class="checkbox">
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
