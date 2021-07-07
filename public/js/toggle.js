window.onload = function () {
  let statefulFunction = (function () {
    document.getElementById("keys").addEventListener("click", handleClick);
    functionState = "mouse";
    function hideButton(id) {
      document.getElementById(id).removeEventListener("click", handleClick);
      document.getElementById(id).classList.add("hide-button");
    }
    function showButton(id) {
      document.getElementById(id).classList.remove("hide-button");
      document.getElementById(id).addEventListener("click", handleClick);
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
  })();
};
