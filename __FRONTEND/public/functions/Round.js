function Round() {
  this.num;
  this.winner;
  this.gameID;
}
Round.prototype.setNum = function (num) {
  this.num = num;
};
Round.prototype.setWinner = function (winner) {
  this.winner = winner;
};
Round.prototype.setGameID = function (id) {
  this.gameID = id;
};
Round.prototype.getNum = function () {
  return this.num;
};
Round.prototype.getWinner = function () {
  return this.winner;
};
Round.prototype.getGameID = function () {
  return this.gameID;
};
