//document.addEventListener("DOMContentLoaded", () => {
function ScoringState() {
  if (debugToggle) {
    console.log("toggle.js");
  }
  this.functionState = "keys";
  this.listeners = [];
  document.getElementById("mouse").addEventListener("click", this.handleClick);
}
/**
 *
 * @param {old ScoringState methods} id
 */
ScoringState.prototype.hideButton = function (id) {
  document.getElementById(id).removeEventListener("click", this.handleClick);
  document.getElementById(id).classList.add("hide-button");
  emitState();
};
ScoringState.prototype.showButton = function (id) {
  document.getElementById(id).classList.remove("hide-button");
  document.getElementById(id).addEventListener("click", this.handleClick);
  emitState();
};
ScoringState.prototype.emitState = function () {};
ScoringState.prototype.handleClick = function (e) {
  if (debugToggle) {
    console.log(e.target.innerText);
  }
  switch (e.target.innerText) {
    case "keys":
      this.hideButton("keys");
      this.showButton("mouse");
      this.functionState = "keys";
      break;

    case "mouse":
      this.hideButton("mouse");
      this.showButton("keys");
      this.functionState = "mouse";
  }
  this.listeners.forEach(function (val, ind, arr) {
    arr[ind].call(this.functionState);
  });
};

ScoringState.prototype.getState = function () {
  return functionState;
};
ScoringState.prototype.registerListener = function (cb) {
  this.listeners.push(cb);
  if (debugToggle) {
    console.log("adding listener");
    console.log(this.listeners);
  }
};
//});
