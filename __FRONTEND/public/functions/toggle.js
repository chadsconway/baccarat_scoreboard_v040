document.addEventListener("DOMContentLoaded", () => {
  var ScoringState = (function () {
    if (debugToggle) {
      console.log("toggle.js");
    }
    functionState = "keys";
    listeners = [];
    function hideButton(id) {
      if (debugToggle) {
        console.log("enter hideButton");
      }
      document.getElementById(id).removeEventListener("click", handleClick);
      document.getElementById(id).classList.add("hide-button");
    }
    function showButton(id) {
      document.getElementById(id).classList.remove("hide-button");
      document.getElementById(id).addEventListener("click", handleClick);
    }
    function handleClick(e) {
      if (debugToggle) {
        console.log("enter handleclick");
      }
      let clcked = e.target.innerText.toLowerCase();
      e.preventDefault();
      if (debugToggle) {
        console.log(e.target.innerText);
      }
      switch (clcked) {
        case "buttons":
          hideButton("keys");
          showButton("mouse");
          functionState = "keys";
          break;

        case "mouse":
          if (debugToggle) {
            console.log("in switch statement case mouse");
          }
          hideButton("mouse");
          showButton("keys");
          functionState = "mouse";
          break;
      }
    }
    document.getElementById("mouse").addEventListener("click", handleClick);

    return {
      getState: function () {
        return functionState;
      },
      registerListener: function (cb) {
        this.listeners.push(cb);
        if (debugToggle) {
          console.log("adding listener");
          console.log(this.listeners);
        }
      },
    };
  })();
});
