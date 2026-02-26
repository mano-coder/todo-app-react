import iconcross from "../images/icon-cross.svg";

export default function taskslist({ tasks, deleteTask, toggleCheckBox, setTasks }) {
  const maptasks = tasks.map(({ text, completed, id }) => {
    return (
      <li
        className="box"
        draggable="true"
        key={id}
        data-id={id}
        onDragStart={(e) => {
          const target = e.target.closest("li");
          if (target) {
            target.classList.add("dragging");
          }
        }}
        onDragEnd={(e) => {
          const target = e.target.closest("li");
          if (target) {
            target.classList.remove("dragging");
          }
          const newOrder = [...document.querySelectorAll("#task-list li")].map(
            (el) => el.dataset.id,
          );
          console.log(newOrder);
          setTasks(newOrder.map((id) => tasks.find((task) => task.id === id)));
        }}
      >
        <span
          className={`checkbox ${completed ? "checked" : ""}`}
          onClick={() => toggleCheckBox(id)}
        >
          <input type="checkbox" />
        </span>
        <span>{text}</span>
        <button className="hidden-btn" onClick={() => deleteTask(id)}>
          <img src={iconcross} />
        </button>
      </li>
    );
  });
  return (
    <ul
      id="task-list"
      onDragOver={(e) => {
        e.preventDefault(); // Necessary to allow a drop
        const draggingItem = document.querySelector(".dragging");
        const siblings = [
          ...e.currentTarget.querySelectorAll("li:not(.dragging)"),
        ];

        // Find the sibling that the dragging item should be placed before
        let nextSibling = siblings.find((sibling) => {
          return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        e.currentTarget.insertBefore(draggingItem, nextSibling);
      }}
    >
      {maptasks}
    </ul>
  );
}
