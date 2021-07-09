function BeadRoad(road) {
  this.road = road | {};
  this.cells = [];
  this.activeColumn = 1;
  this.activeRow = 1;
}
BeadRoad.prototype.getNextCell = function () {
  let row = this.activeRow + 1;
  if (row % 6 === 0) {
    this.activeColumn++;
    this.activeRow = 1;
  }
  let nextCell = {
    r: this.activeRow,
    c: this.activeColumn,
  };
  return nextCell;
};
BeadRoad.prototype.setNextCell = function (hand) {
  let next = this.getNextCell();
  let r = next.r;
  let c = next.c;
  let bead = new Bead("beadroad", hand);
  this.road[r][c] = bead;
  this.render();
};
BeadRoad.prototype.getCell = function (r, c) {
  return this.cells[r][c];
};
BeadRoad.prototype.render = function () {
  let board = document.getElementById("beadroad");
  for (let i of this.cells) {
    console.log(i);
  }
};
module.exports = BeadRoad