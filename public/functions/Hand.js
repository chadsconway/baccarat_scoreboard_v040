function Hand(results) {
  this.hand = results.handNum;
  this.winner = results.winner;
  this.score = results.score || undefined;
  this.natural = results.natural || false;
  this.pairs.banker = results.pairs.banker || false;
  this.pairs.player = results.pairs.player || false;
}
