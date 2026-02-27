export default function Toast({ undoDelete, showToast }) {
  return (
    <div id="toast-container" className={showToast ? "show" : ""}>
      <span>Task deleted</span>
      <button id="undo-btn" onClick={undoDelete}>
        Undo
      </button>
    </div>
  );
}
