let currentTime: Date;

export function initializeTimer(startHour: number, startMinute: number): void {
  // Initialize the current time to the specified start time
  currentTime = new Date();
  currentTime.setHours(startHour, startMinute, 0, 0);
}

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function startTimer(): void {
  console.log(`Timer started at: ${formatTime(currentTime)}`);

  const timerInterval = setInterval(() => {
    currentTime.setMinutes(currentTime.getMinutes() + 1);
    console.log(formatTime(currentTime));

    // Stop the timer after 24 hours
    if (currentTime.getHours() === 3 && currentTime.getMinutes() === 30) {
      clearInterval(timerInterval);
      console.log("Timer reached 24 hours and stopped.");
    }
  }, 60000); // Update every minute
}

// Usage
initializeTimer(3, 30);
startTimer();
