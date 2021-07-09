function Game() {
  this.currRound = 1;
  this.gameID = Date.now();
  this.title = title || "GameID: ";
  this.hand = {};
  this.rounds = [];
  this.init = function () {
    localStorage.setItem(gameID, Game.prototype.serialize());
  };
}
Game.prototype.recordRound = function (results) {
  results.handNum = this.currRound;
  let hand = new Hand(results);
  this.results.push(hand);
  beadRoad.setNextCell(hand);
  this.round++;
};
Game.prototype.getRound = function () {
  return this.round;
};
Game.prototype.incRound = function () {
  this.round++;
  console.log("Round = " + currRound);
};
