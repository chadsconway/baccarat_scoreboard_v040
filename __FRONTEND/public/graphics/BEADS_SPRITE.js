var beadSpriteDefs = ["name", "x", "y", "width", "height"];

const BSD = [
  ["bead-road-banker", 0, 0, 50, 50],
  ["bead-road-player", 50, 0, 50, 50],
  ["bead-road-tie", 100, 0, 50, 50],
  ["bead-road-banker-initial", 0, 50, 50, 50],
  ["bead-road-player-initial", 50, 50, 50, 50],
  ["bead-road-tie-initial", 100, 50, 50, 50],
  ["big-road-banker", 0, 100, 50, 50],
  ["big-road-player", 50, 100, 50, 50],
  ["big-road-tie", 100, 100, 50, 50],
  ["pair-banker", 150, 0, 50, 50],
  ["pair-player", 150, 50, 50, 50],
  ["pair-both", 150, 100, 50, 50],
  ["natural", 200, 0, 50, 50],
];
const BEADSPRITE = [
  "beadbanker",
  "beadplayer",
  "beadtie",
  "beadbanker_initials",
  "beadplayer_initials",
  "beadtie_initials",
  "bigbanker",
  "bigplayer",
  "bigtie",
  "pair_b",
  "pair_p",
  "pair_pb",
  "natural",
];

function getSprite(desc) {
  let ind = BEADSPRITE.indexOf(desc);
  let viewBox = BSD[ind].slice(1, 5);
  if (debugSprite === true) {
    console.log("BEAD_SPRITE.js-->getSprite(desc)");
    console.log("indexOf beadsprite bead = " + BEADSPRITE.indexOf(desc));
    // console.log("buildRef = " + buildRef);
    console.log("viewBox = " + viewBox);
  }
  return `BEAD_SPRITE.svg#svgView(viewBox(${viewBox}))`;
}
if (debugSprite) {
  console.log("getSprite(beadbanker) = " + getSprite("beadbanker"));
}
getSprite("beadbanker");
