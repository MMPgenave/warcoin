import React, { useEffect, useState } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date(0, 0, 0, 3, 30)); // Start at 3:30 AM
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRunning) {
        setCurrentTime((prevTime) => {
          const newTime = new Date(prevTime);
          newTime.setMinutes(newTime.getMinutes() + 1);

          // Stop the timer when it reaches 3:30 AM again
          if (newTime.getHours() === 3 && newTime.getMinutes() === 30) {
            setIsRunning(false);
          }
          return newTime;
        });
      }
    }, 60000); // Update every minute

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [isRunning]);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <div>{formatTime(currentTime)}</div>
      {!isRunning && <div>(Timer reached 3:30 AM and stopped.)</div>}
    </div>
  );
};

export default App;
