const Hand = require("./Hand");
const Draw = require("./Draw");
const Animate = require("./Animate");
const GameBoard = require("./GameBoard");

function Game(title) {
  this.gameID = Date.now();
  this.title = title || "GameID: ";
  this.hand = {};
  this.results = [];
}

module.exports = Game;
