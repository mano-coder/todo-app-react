export default function Footer({ itemsLeft }) {
  return (
    <footer className="box">
      <span id="item-left">{itemsLeft < 0 ? "-" : itemsLeft()} items left</span>
      <div className="filter-options">
        <button type="button" className="selected">
          All
        </button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
      <button type="button" id="clear-completed">
        Clear Completed
      </button>
    </footer>
  );
}
