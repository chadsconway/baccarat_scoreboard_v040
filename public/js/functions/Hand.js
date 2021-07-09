function Hand(results) {
  this.hand = 0;
  this.gameID = results.gameID;
  this.winner = results.winner;
  this.score = results.score;
  this.natural = results.flags.natural;
  this.pairs.banker = results.flags.pairbanker;
  this.pairs.player = results.flags.pairplayer;
}
