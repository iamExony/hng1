function updateTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const dayOfWeekElement = document.getElementById("dayOfWeek");

  const now = new Date();
  
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDate()];

  utcTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dayOfWeekElement.textContent = day;
}

//update time every seconds
setInterval(updateTime, 1000); 
//invoke the function 
updateTime(); 
