const helloButton = document.querySelector("#helloBtn");
const message = document.querySelector("#message");

helloButton.addEventListener("click", () => {
  message.textContent = "成功：你剛剛讓 JavaScript 在瀏覽器裡執行了。";
});

const timerDisplay = document.querySelector("#timerDisplay");
const startPauseButton = document.querySelector("#startPauseBtn");
const resetButton = document.querySelector("#resetBtn");

let elapsedMs = 0;
let startedAt = 0;
let timerInterval = null;

function formatTime(milliseconds) {
  const totalTenths = Math.floor(milliseconds / 100);
  const minutes = Math.floor(totalTenths / 600);
  const seconds = Math.floor((totalTenths % 600) / 10);
  const tenths = totalTenths % 10;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

function renderTimer() {
  const currentElapsed = timerInterval
    ? elapsedMs + (Date.now() - startedAt)
    : elapsedMs;

  timerDisplay.textContent = formatTime(currentElapsed);
}

startPauseButton.addEventListener("click", () => {
  if (timerInterval) {
    elapsedMs += Date.now() - startedAt;
    clearInterval(timerInterval);
    timerInterval = null;
    startPauseButton.textContent = "繼續";
    renderTimer();
    return;
  }

  startedAt = Date.now();
  timerInterval = setInterval(renderTimer, 100);
  startPauseButton.textContent = "暫停";
  renderTimer();
});

resetButton.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  elapsedMs = 0;
  startedAt = 0;
  timerDisplay.textContent = "00:00.0";
  startPauseButton.textContent = "開始";
});
