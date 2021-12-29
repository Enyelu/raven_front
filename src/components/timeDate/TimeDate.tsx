import { useEffect, useState } from "react";
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
    <div>
      {today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()}
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
};
export default TimeDate;
