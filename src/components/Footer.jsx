export default function Footer() {
  return (
    <footer class="box">
      <span id="item-left">- items left</span>
      <div class="filter-options">
        <button type="button" class="selected">
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
