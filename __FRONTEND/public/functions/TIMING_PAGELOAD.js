let currDate = Date.now();
console.log("current date is = " + currDate);
console.log("Timing.pageload.js loaded");
document.addEventListener("loadstart", (e) => {
  let loadstart = Performance.now();
  console.log("loadstart fired at " + loadstart);
});
