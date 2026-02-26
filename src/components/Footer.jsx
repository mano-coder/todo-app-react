export default function Footer({ itemsLeft, setFilter, filter, clearCompleted }) {
  return (
    <footer className="box">
      <span id="item-left">{itemsLeft < 0 ? "-" : itemsLeft()} items left</span>
      <div className="filter-options">
        <button
          type="button"
          className={filter === "all" ? "selected" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filter === "active" ? "selected" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={filter === "completed" ? "selected" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button type="button" id="clear-completed" onClick={() => clearCompleted()}>
        Clear Completed
      </button>
    </footer>
  );
}
