// const { listeners } = require("../../app");

document.addEventListener("DOMContentLoaded", () => {
  let statefulFunction = (function () {
    console.log("toggle.js");
    document.getElementById("mouse").addEventListener("click", handleClick);
    functionState = "keys";
    listeners = [];
    function hideButton(id) {
      document.getElementById(id).removeEventListener("click", handleClick);
      document.getElementById(id).classList.add("hide-button");
      emitState();
    }
    function showButton(id) {
      document.getElementById(id).classList.remove("hide-button");
      document.getElementById(id).addEventListener("click", handleClick);
      emitState();
    }
    function handleClick(e) {
      console.log(e.explicitOriginalTarget.id);
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
    function emitState() {
      listeners.forEach(function (val, ind, arr) {
        listeners[ind].call(functionState);
      });
    }
    return {
      getState: function () {
        return functionState;
      },
      registerListener: function (cb) {
        console.log("adding listener");
        listeners.push(cb);
      },
    };
  })();
  console.log("currentState = " + statefulFunction.getState());
  function callback(functionState) {
    if (functionState === "keys") {
      console.log("keyboard input active");
      document.addEventListener("keypress", function (e) {
        console.log(e);
      });
    }
  }
  statefulFunction.registerListener(callback);
});
