document.addEventListener("DOMContentLoaded", function () {
  let game;
  if (localStorage.getItem("baccarat_game")) {
    if (debugInterface) {
      console.log("game found in local storage");
    }
    game = new Game();
    game.deserialize(localStorage.getItem("baccarat_game"));
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
  let button_banker = document
    .querySelector(".ndc-entry-banker")
    .addEventListener("click", handleClickBanker);
  let button_player = document
    .querySelector(".ndc-entry-player")
    .addEventListener("click", handleClickPlayer);
  let button_tie = document
    .querySelector(".ndc-entry-tie")
    .addEventListener("click", handleClickTie);
  let button_mouse = document
    .querySelector(".ndc-entry-mouse")
    .addEventListener("click", handleClickMouse);
  let button_keyboard = document
    .querySelector(".ndc-entry-keyboard")
    .addEventListener("click", handleClickKeyboard);
  let button_file = document
    .querySelector(".ndc-entry-file")
    .addEventListener("click", handleClickFile);
  let button_save = document
    .querySelector(".ndc-entry-save")
    .addEventListener("click", handleClickSave);
  let button_reset = document
    .querySelector(".ndc-entry-reset")
    .addEventListener("click", handleClickReset);
  async function handleClick(e) {
    console.log(e.originalTarget);
  }

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
