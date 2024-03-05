import { useState, useEffect } from "react";

import "../styles/counter.css";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  //retrieve countdown values from localStorage on component mount
  useEffect(() => {
    const storedCountdown = JSON.parse(localStorage.getItem("countdown"));
    
  }, []);

  const updateCountdown = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        if (hours > 0) {
          setSeconds(59);
          setMinutes(59);
          setHours(hours - 1);
        } else {
          if (days > 0) {
            setSeconds(59);
            setMinutes(59);
            setHours(23);
            setDays(days - 1);
          } else {
            // Countdown completed, you can add further actions here
          }
        }
      }
    }

    // local storage
    localStorage.setItem(
      "countdown",
      JSON.stringify({ days, hours, minutes, seconds })
    );
  };
  return (
    <section className="counter" id="projects">
      <div className="Container">
        <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
          {/* days */}
          <CountdownUnit value={days} unit="days" />
          <CountdownUnit value={hours} unit="hours" />
          <CountdownUnit value={minutes} unit="min" />
          <CountdownUnit value={seconds} unit="sec" />
        </div>
      </div>
    </section>
  );
};

const CountdownUnit = ({ value, unit }) => {
  return (
    <div className="flex flex-col bg-neutral p-3 md:px-6  rounded-box ">
      <span className=" text-6xl counter-gradient ">
        <span style={{ "--value": value }}>{value}</span>
      </span>
      <span className="">{unit}</span>
    </div>
  );
};

export default Counter;
