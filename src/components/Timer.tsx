import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch";

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date(0, 0, 0, 3, 30)); // Start at 3:30 AM
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [color, setColor] = useState<"blue" | "red">("blue"); // State to track the color

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRunning) {
        setCurrentTime((prevTime) => {
          const newTime = new Date(prevTime);
          newTime.setSeconds(newTime.getSeconds() + 1);
          // Stop the timer when it reaches 3:32 AM again
          if (newTime.getHours() === 3 && newTime.getMinutes() === 40 && newTime.getSeconds() === 0) {
            setIsRunning(false);
          }
          return newTime;
        });
      }
    }, 1000); // Update every seconds

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [isRunning]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor((prevColor) => (prevColor === "blue" ? "red" : "blue")); // Toggle color every 4 seconds
    }, 4000); // Change color every 4 seconds

    return () => clearInterval(colorInterval); // Cleanup on unmount
  }, []);

  const formatTime = (date: Date): { hours: string; minutes: string; seconds: string } => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return { hours, minutes, seconds };
  };
  const { hours, minutes, seconds } = formatTime(currentTime);
  return (
    <div>
      <StopWatch hr={hours} min={minutes} sec={seconds} color={color} />
      {/* {!isRunning && <div>(Timer reached 3:31 AM and stopped.)</div>} */}
    </div>
  );
};

export default App;
