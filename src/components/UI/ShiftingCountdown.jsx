import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef(null);

  const initialTimings = {
    days: 0,
    hours: 0,
    minutes: 15,
    seconds: 7,
  };

  const [remaining, setRemaining] = useState(() => {
    const savedTime = JSON.parse(localStorage.getItem("countdownTime"));
    return savedTime || initialTimings;
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  useEffect(() => {
    localStorage.setItem("countdownTime", JSON.stringify(remaining));
  }, [remaining]);

  const handleCountdown = () => {
    setRemaining((prevRemaining) => {
      if (
        prevRemaining.days === 0 &&
        prevRemaining.hours === 0 &&
        prevRemaining.minutes === 0 &&
        prevRemaining.seconds === 0
      ) {
        // If all values are 0, stop the countdown
        clearInterval(intervalRef.current || undefined);
        return prevRemaining;
      }

      const newRemaining = { ...prevRemaining };

      // Decrease seconds
      if (newRemaining.seconds > 0) {
        newRemaining.seconds -= 1;
      } else {
        // If seconds reach 0, decrement minutes and set seconds to 59
        newRemaining.seconds = 59;

        if (newRemaining.minutes > 0) {
          newRemaining.minutes -= 1;
        } else {
          // If minutes reach 0, decrement hours and set minutes to 59
          newRemaining.minutes = 59;

          if (newRemaining.hours > 0) {
            newRemaining.hours -= 1;
          } else {
            // If hours reach 0, decrement days and set hours to 23
            newRemaining.hours = 23;

            if (newRemaining.days > 0) {
              newRemaining.days -= 1;
            }
          }
        }
      }

      return newRemaining;
    });
  };
  return (
    <div className="Container ">
      <div className="mx-auto flex w-full items-center bg-white md:w-[75%]">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-r-[1px] border-slate-200 font-mono md:h-36 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="counter-gradient block text-2xl font-medium md:text-4xl lg:text-6xl xl:text-7xl"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs text-slate-900 md:text-sm">{text}</span>
    </div>
  );
};

export default ShiftingCountdown;
