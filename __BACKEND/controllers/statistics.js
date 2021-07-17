const app = require("../../app");

function Stats() {
  this.BANKER = 0;
  this.PLAYER = 0;
  this.TIE = 0;
  this.PAIRBANK = 0;
  this.PAIRPLAY = 0;
  this.NATURAL = 0;
}
Stats.prototype.setStat = function (stat, val) {
  this.stat = val;
};
Stats.prototype.getStat = function (stat) {
  return this.stat;
};
Stats.prototype.incStat = function (stat) {
  let val = this.getStatfunction(stat);
  let newval = val + 1;
  this.stat = newval;
};
Stats.prototype.decStat = function (stat) {
  let val = this.getStatfunction(stat);
  let newval = val - 1;
  if (newval < 0) {
    newval = 0;
  }
  this.stat = newval;
};

module.exports = Stats;
