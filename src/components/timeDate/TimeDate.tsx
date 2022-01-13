import { useEffect, useState } from "react";
import "./TimeDate.scss"

const TimeDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);
  const tick = () => {
    setDate(new Date());
  };
  let today = new Date();

  return (
    <div className="time-date-div">
      <div className="time-div" >{date.toLocaleTimeString()}</div>
      <div className="year-div">
      {today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()}
      </div>
      
      
    </div>
  );
};
export default TimeDate;