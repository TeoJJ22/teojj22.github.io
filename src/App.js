import "./App.css";
import { React, useState } from "react";
import List from "./List.js";
import Header from "./Header.js";

const App = () => {
  const [day, setDay] = useState(0);
  const [lists, setLists] = useState([
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
    [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ],
  ]);

  const addTask = (id, input) => {
    //Copies the lists into new array, check what day is in state and adds
    const updatedLists = [...lists]; //the input into the list with corresponding id
    updatedLists[day] = updatedLists[day].map((list) => {
      if (list.id === id) {
        return {
          ...list,
          tasks: [...list.tasks, input],
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const removeTask = (taskId, listId) => {
    const updatedLists = [...lists];
    updatedLists[day] = updatedLists[day].map((list) => {
      if (list.id === listId) {
        list.tasks.splice(taskId, 1);
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handlePrevDayClick = () => {
    //Looping around the days
    if (day === 0) {
      setDay(6);
    } else {
      setDay(day - 1);
    }
  };

  const handleNextDayClick = () => {
    //Looping around the days
    if (day === 6) {
      setDay(0);
    } else {
      setDay(day + 1);
    }
  };

  return (
    <div>
      <Header
        day={day}
        handleNextDayClick={handleNextDayClick}
        handlePrevDayClick={handlePrevDayClick}
      />
      <div className="lists">
        {lists[day].map((list, index) => (
          <div className="list" key={index}>
            <List
              addTask={addTask}
              list={list}
              id={index}
              removeTask={removeTask}
            />
          </div> //Renders 3 list items next to each other
        ))}
      </div>
    </div>
  );
};

export default App;
