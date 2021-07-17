export const gameSchema = {
  beadRoad: [],
  bigRoad: [],
  bigEyeRoad: [],
  smallRoad: [],
  cockroachRoad: [],
  rounds: [],
};
export const roundSchema = {
  number: 0,
  winner: ["BANKER", "PLAYER", "TIE"],
  gameID: "0",
};
export const cellSchema = {
  bead: ["R", "G", "B"],
  ties: 0,
  number: 1,
  column: 1,
  row: 1,
};
