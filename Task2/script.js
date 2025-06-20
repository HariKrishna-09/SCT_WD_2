let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("laps");

const updateDisplay = () => {
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    document.getElementById("milliseconds").innerText = milliseconds.toString().padStart(2, "0");
};

const startPauseTimer = () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.innerText = "Start";
    } else {
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
        startPauseBtn.innerText = "Pause";
    }
    isRunning = !isRunning;
};

const resetTimer = () => {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    startPauseBtn.innerText = "Start";
    lapList.innerHTML = "";
};

const recordLap = () => {
    if (isRunning) {
        const lapTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
        const lapItem = document.createElement("li");
        lapItem.innerText = `Lap: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
};

startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

updateDisplay();