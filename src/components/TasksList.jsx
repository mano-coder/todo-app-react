import iconcross from "../images/icon-cross.svg";

export default function taskslist({ tasks }) {
  const maptasks = tasks.map(({ text, completed }, index) => {
    return (
      <li className="box" draggable="true" key={index}>
        <span className={`checkbox ${completed ? "checked" : ""}`}>
          <input type="checkbox" />
        </span>
        <span>{text}</span>
        <button className="hidden-btn">
          <img src={iconcross} />
        </button>
      </li>
    );
  });
  return <ul id="task-list">{maptasks}</ul>;
}
