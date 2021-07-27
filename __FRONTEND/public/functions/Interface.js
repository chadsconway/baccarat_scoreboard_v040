document.addEventListener("DOMContentLoaded", function () {
  let game;
  if (localStorage.getItem("baccarat_game")) {
    if (debugInterface) {
      console.log("game found in local storage");
    }
    game = {new Game()} => (reject, resolve){
    game.deserialize(localStorage.getItem("baccarat_game"));
    }
  } else {
    if (debugInterface) {
      console.log("no game found in local storage, initializing New Game");
    }
    game = new Game();
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
        console.log("keyboard input active");
      }
      document.addEventListener("keypress", function (e) {
        if (debugInterface) {
          console.log(e);
        }
      });
    }
  }
  /**
   * Registering listener on state of mouse/buttons toggle
   */
  let scoringState = async function () {
    let ss = await new scoringState();
    ss.registerListener(callback());
  };

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
    game.recordRound("banker");
    game.log();
  }

  async function handleClickPlayer(e) {
    e.preventDefault();
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
    game.recordRound("player");
    game.log();
  }

  async function handleClickTie(e) {
    e.preventDefault();
    // todo
    if (debugInterface) {
      console.log(e.originalTarget);
    }
    game.recordRound("tie");
    game.log();
  }
  function handleClickUndo(e) {
    // todo
  }
  function handleClickRedo(e) {
    // todo
  }

  async function handleClickKeyboard(e) {
    // todo
    console.log(e.originalTarget);
  }

  async function handleClickMouse(e) {
    // todo
    console.log(e.originalTarget);
  }

  async function handleClickFile(e) {
    // todo
    console.log(e.originalTarget);
  }

  async function handleClickSave(e) {
    // todo
    console.log(e.originalTarget);
  }

  /**
   * Data Handling Stubs
   */
  async function loadFile() {
    // todo
    console.log(e.originalTarget);
  }
  async function hydrateBeadRoad() {
    // todo
  }

  async function hydrateBigRoad() {
    // todo
  }

  async function generateDerivedRoads() {
    // todo
  }

  /**
   * View functions
   */
  async function render() {
    // todoincRound
  }

  async function resize(e) {
    // todo
    console.log(e.originalTarget);
  }

  async function contextMenu() {
    // todo
  }

  async function editMode() {
    // todo
  }

  async function entryMode() {
    // todo
  }

  async function saveGame() {
    // todo
  }

  async function newGame() {
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
