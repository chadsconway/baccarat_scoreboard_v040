document.addEventListener("DOMContentLoaded", function () {
  let game = new Game();
  if (localStorage.getItem("baccarat_game")) {
    if (debugInterface) {
      console.log("game found in local storage");
    }
    game.deserialize(localStorage.getItem("baccarat_game"));
  }

  // let bigRoad = new BigRoad();
  // let bead_road = document.querySelector(".bead-road-svg");
  // bead_road.addEventListener("mouseover", handleBeadRoadHover);
  // bead_road.addEventListener("mouseout", handleBeadRoadMouseOut);

  function handleMouseEvent(e) {
    let cursorPoint = {
      X: e.pageX,
      Y: e.pageY,
      scrollPosX: e.clientX - e.pageX,
      scrollPosY: e.clientY - e.pageY,
    };
  }

  /**
   *@function callback For listener internal to
   *             to toggle.js scoringState var
   *@param {*} functionState
   */
  function callback(functionState) {
    if (functionState === "keys") {
      if (debugToggle) {
        console.log("Callback received: keyboard input active");
      }
    }
    if (functionState === "mouse") {
      if (debugToggle) {
        console.log("Callback received: mouse input active");
      }
    }
  }
  document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "1") {
      handleClickBanker(e);
    }
    if (key === "2") {
      handleClickPlayer(e);
    }
    if (key === "3") {
      handleClickTie(e);
    }
  });

  /**
   *Mouse Events have Props:
    @Button button
    @AltKey
    @CtrlKey
    @ShiftKey
    @metaKey (mac)
    @clientX window relative
    @clientY window relative
    @pageX Unaffected by scroll
    @pageY Unaffected by scroll
   */
  /**
   * @description: MouseEventMiddleware
   *          Receives and delegates all mouseevents
   * @param {*} e
   */

  let mouseevent = document.addEventListener("mouse", function (e) {
    console.log("mouseevent");
    console.log(e);
  });
  // let mousedown =
  let banker_button = document
    .querySelector(".banker-button")
    .addEventListener("click", handleClickBanker);
  let player_button = document
    .querySelector(".player-button")
    .addEventListener("click", handleClickPlayer);
  let tie_button = document
    .querySelector(".tie-button")
    .addEventListener("click", handleClickTie);
  let undo_button = document
    .querySelector(".undo-button")
    .addEventListener("click", handleClickUndo);
  let file_button = document
    .querySelector(".file-button")
    .addEventListener("click", handleClickFile);
  let save_button = document
    .querySelector(".save-button")
    .addEventListener("click", handleClickSave);
  let reset_button = document
    .querySelector(".reset-button")
    .addEventListener("click", handleClickReset);

  /**
   * control panel stubouts
   */
  function handleClickBanker(e) {
    e.preventDefault();
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
    game.recordRound("BANKER");
    game.log();
  }

  function handleClickPlayer(e) {
    e.preventDefault();
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
    game.recordRound("PLAYER");
    game.log();
  }

  function handleClickTie(e) {
    e.preventDefault();
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
    game.recordRound("TIE");
    game.log();
  }
  function handleClickUndo(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }
  function handleClickRedo(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }

  function handleClickKeyboard(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }

  function handleClickMouse(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }

  function handleClickFile(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }

  function handleClickSave(e) {
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
  }

  /**
   * Data Handling Stubs
   */
  function loadFile() {
    // todo
    console.log(e.originalTarget);
  }
  function hydrateBeadRoad() {
    // todo
  }

  function hydrateBigRoad() {
    // todo
  }

  function generateDerivedRoads() {
    // todo
  }

  /**
   * View functions
   */
  function render() {
    // todoincRound
  }

  function resize(e) {
    // todo
    console.log(e.originalTarget);
  }

  function contextMenu() {
    // todo
  }

  function editMode() {
    // todo
  }

  function entryMode() {
    // todo
  }

  function saveGame() {
    // todo
  }

  function newGame() {
    // todo
  }
  function handleBeadRoadHover(e) {
    console.log("handleBeadRoadHover Kicked");

    // e.preventDefault();
    let title = document.querySelector(".bead-road-title-group");
    title.setAttribute("visibility", "visible");
  }
  function handleBeadRoadMouseOut(e) {
    console.log("handleBeadRoadMouseOut Kicked");
    let title = document.querySelector(".bead-road-title-group");
    title.setAttribute("visibility", "hidden");
  }
  function handleClickReset(e) {
    prompt("Save Game before Resetting?");
    beadRoad = new BeadRoad();
  }
});
