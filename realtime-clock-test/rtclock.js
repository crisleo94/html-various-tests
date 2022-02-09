function renderTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const elHours = document.getElementById("hours");
  const elMinutes = document.getElementById("minutes");
  const elSeconds = document.getElementById("seconds");

  elHours.textContent = hours + ":";
  elMinutes.textContent = minutes;
  elSeconds.textContent = seconds;
}

renderTime();

setInterval(renderTime, 1000);
