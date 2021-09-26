const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let isDrawing = false;

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  if (isDrawing || e.type === "click") {
    bar.style.height = height;
    video.playbackRate = playbackRate;
    bar.textContent = playbackRate.toFixed(2) + "x";
  }
}
speed.addEventListener("mousemove", handleMove);
speed.addEventListener("click", handleMove);
speed.addEventListener("mousedown", () => (isDrawing = true));
speed.addEventListener("mouseup", () => (isDrawing = false));
