// const { listeners } = require("../../app");
var debugToggle = true;

document.addEventListener("DOMContentLoaded", () => {
  function ScoringState() {
    if (debugToggle === true) {
      console.log("toggle.js");
    }
    document.getElementById("mouse").addEventListener("click", handleClick);
    this.functionState = "keys";
    this.listeners = [];
  }
  /**
   * 
   * @param {old ScoringState methods} id 
   */
  ScoringState.prototype.hideButton = function(id) {
      document.getElementById(id).removeEventListener("click", handleClick);
      document.getElementById(id).classList.add("hide-button");
      emitState();
    }
  ScoringState.prototype.showButton = function(id) {
      document.getElementById(id).classList.remove("hide-button");
      document.getElementById(id).addEventListener("click", handleClick);
      emitState();
    }
  ScoringState.prototype.handleClick = function(e) {
      if (debugToggle === true) {
        console.log(e.explicitOriginalTarget.id);
      }
      switch (e.explicitOriginalTarget.id) {
        case "keys":
          hideButton("keys");
          showButton("mouse");
          functionState = "keys";
          break;
        case "mouse":
          hideButton("mouse");
          showButton("keys");
          functionState = "mouse";
      }
      document.getElementById("keys").addEventListener("click", handleClick);
    }
  ScoringState.prototype.emitState = function() {
      listeners.forEach(function (val, ind, arr) {
        listeners[ind].call(functionState);
    });
  }
  ScoringState.prototype.getState =  function() {
    return functionState;
  };
  ScoringState.registerListener =  function(cb) {
        if (debugToggle) {
          console.log("adding listener");
        }
        listeners.push(cb);
  };
});