import React from "react";

const Header = ({ day, handleNextDayClick, handlePrevDayClick }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <header className="header">
      <button className="prev-button" onClick={handlePrevDayClick}>
        {"<"}
      </button>
      <div className="day-wrap">
        <p className="day">{days[day]}</p>
      </div>
      <button className="next-button" onClick={handleNextDayClick}>
        {">"}
      </button>
    </header>
  );
};

export default Header;
