function GeneratorRound() {
  this.results = {};
}
GeneratorRound.prototype.getWinner = function () {
  let rand = this.getIntValue(1, 3);
  console.log("rand = " + rand);
  let winner = "";
  switch (rand) {
    case 1:
      winner = "BANKER";
      break;
    case 2:
      winner = "PLAYER";
      break;
    case 3:
      winner = "TIE";
      break;
  }
  return winner;
};
GeneratorRound.prototype.getIntValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
GeneratorRound.prototype.pairsAndNatural = function (results) {
  let rand1 = this.getIntValue(0, 1);
  let rand2 = this.getIntValue(0, 1);
  let rand3 = this.getIntValue(0, 1);
  let pairbank, pairplyr, natural;
  rand1 ? (pairbank = true) : (pairbank = false);
  rand2 ? (pairplyr = true) : (pairplyr = false);
  rand3 ? (natural = true) : (natural = false);
  results.pairbank = pairbank;
  results.pairplyr = pairplyr;
  results.natural = natural;
  return results;
};
GeneratorRound.prototype.genRound = function () {
  let results = {};
  results.winner = this.getWinner();
  results.score = this.getIntValue(0, 9);
  results = this.pairsAndNatural(results);
  return results;
};
let generator = new GeneratorRound();
let results = generator.genRound();
console.table(results);
