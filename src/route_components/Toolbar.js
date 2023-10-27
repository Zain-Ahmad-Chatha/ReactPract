const Toolbar = ({ onToolbarClick }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onToolbarClick("insert-table")}>
        Insert Table
      </button>
      <button onClick={() => onToolbarClick("save")}>Save</button>
    </div>
  );
};

export default Toolbar;
