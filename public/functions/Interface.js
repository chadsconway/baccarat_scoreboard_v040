console.log("scoring_.js onload");
let game = new Game();
let beadRoad = new BeadRoad();
let bead_road = document.querySelector(".bead-road-svg");

bead_road.addEventListener("mouseover", handleBeadRoadHover);
bead_road.addEventListener("mouseout", handleBeadRoadMouseOut);
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
async function init() {}

/**
 * control panel stubouts
 */
function handleClickBanker(e) {
  e.preventDefault();
  // todo
  console.log(e.originalTarget);
  let bead = ` 
  <svg class="bead">
  <circle id="bead-road-banker" style="fill: none; stroke: url(#color-1); stroke-width: 5px;" cx="25" cy="125" r="22.5" class="banker-bead-big-road big-road-bead"/>
  </svg>
  `;
  game.recordHand("BANKER", undefined, false, false, false);
}

async function handleClickPlayer(e) {
  // todo
  console.log(e.originalTarget);
}

async function handleClickTie(e) {
  // todo
  console.log(e.originalTarget);
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
  // todo
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
