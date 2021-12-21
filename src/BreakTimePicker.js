import React, { useState } from "react";

const initializeHoursAndMins = (op) => {
  let upperLimit = 0;
  const val = [];
  if (op === "hour") {
    upperLimit = 13;
  }
  if (op === "min") {
    upperLimit = 60;
  }
  for (let i = 0; i < upperLimit; i++) {
    if (i < 10) i = appendLeadingZero(i);
    val.push(i.toString());
  }
  return val;
};

const initializeProps = (val) => {
  if (val < 10) val = appendLeadingZero(val);
  return val.toString();
};

const appendLeadingZero = (number) => `0${number}`;

const BreakTimePicker = (props) => {
  const hours = initializeHoursAndMins("hour");
  const mins = initializeHoursAndMins("min");
  const propHour = initializeProps(props.hour);
  const propMin = initializeProps(props.min);
  const [hourVal, setHourVal] = useState(propHour);
  const [minVal, setMinVal] = useState(propMin);
  return (
    <div>
      <select value={hourVal} onChange={(e) => setHourVal(e.target.value)}>
        {hours.map((hour) => {
          return <option key={hour}>{hour}</option>;
        })}
      </select>
      :
      <select value={minVal} onChange={(e) => setMinVal(e.target.value)}>
        {mins.map((min) => (
          <option key={min}>{min}</option>
        ))}
      </select>
    </div>
  );
};

export default BreakTimePicker;
