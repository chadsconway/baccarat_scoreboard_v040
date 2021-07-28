function Stats() {
  this.BANKER = 0;
  this.PLAYER = 0;
  this.TIE = 0;
  this.ROUNDS = 0;
  this.STATS = {};
  this.bankerScore = document.querySelector(".banker-score");
  this.bankerScore.innerHTML = "0";
  this.playerScore = document.querySelector(".player-score");
  this.playerScore.innerHTML = "0";
  this.tieScore = document.querySelector(".tie-score");
  this.tieScore.innerHTML = "0";
  this.roundsScore = document.querySelector(".rounds-score");
  this.roundsScore.innerHTML = "0";

  console.log("'bankerElem = " + this.bankerElem);
}
Stats.prototype.updateStatsDisplay = function () {
  this.bankerScore.innerHTML = this.BANKER;
  this.playerScore.innerHTML = this.PLAYER;
  this.tieScore.innerHTML = this.TIE;
  this.roundsScore.innerHTML = this.ROUNDS;
};
Stats.prototype.getBanker = function () {
  return this.BANKER;
};
Stats.prototype.getPlayer = function () {
  return this.PLAYER;
};
Stats.prototype.getTie = function () {
  return this.TIE;
};
Stats.prototype.getRounds = function () {
  return this.ROUNDS;
};
Stats.prototype.getAll = function () {
  this.STATS = {
    Banker: this.BANKER,
    Player: this.PLAYER,
    Tie: this.TIE,
    Rounds: this.ROUNDS,
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
Stats.prototype.setRounds = function (rounds) {
  this.ROUNDS = rounds;
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
Stats.prototype.incRounds = function () {
  this.ROUNDS++;
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
Stats.prototype.decRounds = function () {
  this.ROUNDS--;
};
