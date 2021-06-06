import React from "react";

const DateOfMonth = ({ date, month }) => {
  return (
    <span>
      {month}-{date}
    </span>
  );
};

export default DateOfMonth;
