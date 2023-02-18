const Text = ({ id, task, handleRemove }) => {
  const onRemoveClick = () => {
    handleRemove(id);
  };
  return (
    <div className="text">
      <h3>{task}</h3>
      <button onClick={onRemoveClick} className="remove-button">
        -
      </button>
    </div>
  );
};

export default Text;
