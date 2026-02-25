import iconcross from "../images/icon-cross.svg";

export default function taskslist({ tasks, deleteTask }) {
  const maptasks = tasks.map(({ text, completed, id }) => {
    return (
      <li className="box" draggable="true" key={id}>
        <span className={`checkbox ${completed ? "checked" : ""}`}>
          <input type="checkbox" />
        </span>
        <span>{text}</span>
        <button className="hidden-btn" onClick={() => deleteTask(id)}>
          <img src={iconcross} />
        </button>
      </li>
    );
  });
  return <ul id="task-list">{maptasks}</ul>;
}
