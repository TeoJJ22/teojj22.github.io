import React, { useState } from "react";
import Text from "./Text";

const List = ({ list, addTask, removeTask }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleRemove = (taskId) => {
    removeTask(taskId, list.id);
  };

  const addTaskClick = () => {
    if (input != "") {
      addTask(list.id, input);
      setInput("");
    }
    setInput("");
  };

  return (
    <div>
      <h3>
        {list.id == 0
          ? "Tasks ~ 5 min"
          : list.id == 1
          ? "Tasks 10 min+"
          : "Projects 30 min+"}
      </h3>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Add a task"
      ></input>
      <button onClick={addTaskClick}>+</button>
      {list.tasks.map((task, index) => (
        <Text key={index} id={index} task={task} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default List;
