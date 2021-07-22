function Stats() {
  this.BANKER = 0;
  this.PLAYER = 0;
  this.TIE = 0;
  this.GAMES = 0;
  this.STATS = {};
}
Stats.prototype.getBanker = function () {
  return this.BANKER;
};
Stats.prototype.getPlayer = function () {
  return this.PLAYER;
};
Stats.prototype.getTie = function () {
  return this.TIE;
};
Stats.prototype.getGames = function () {
  return this.GAMES;
};
Stats.prototype.getAll = function () {
  this.STATS = {
    Banker: this.BANKER,
    Player: this.PLAYER,
    Tie: this.TIE,
    Games: this.GAMES,
  };
  return this.STATS;
};
Stats.prototype.setBanker = function (banker) {
  this.BANKER = banker;
};
Stats.prototype.setPlayer = function (player) {
  this.PLAYER = player;
};
Stats.prototype.setTie = function (tie) {
  this.TIE = tie;
};
Stats.prototype.setGames = function (games) {
  this.GAMES = games;
};
Stats.prototype.incBanker = function () {
  this.BANKER++;
};
Stats.prototype.incPlayer = function () {
  this.PLAYER++;
};
Stats.prototype.incTie = function () {
  this.TIE++;
};
Stats.prototype.incGames = function () {
  this.GAMES++;
};
Stats.prototype.decBanker = function () {
  this.BANKER--;
};
Stats.prototype.decPlayer = function () {
  this.PLAYER--;
};
Stats.prototype.decTie = function () {
  this.TIE--;
};
Stats.prototype.decGames = function () {
  this.GAMES--;
};
