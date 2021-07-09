function Cell(cellNumber) {
  this.cellNumber = cellNumber;
  this.column = Math.floor(cellNumber / 6) + 1;
  this.row = cellNumber - ( (this.column - 1)*6);
  this.hand = {};
}
Cell.prototype.getCoords() = function(){
  let coords = {
    x: this.column,
    y: this.row
  }
  return coords;
}
Cell.prototype.setResults = function(hand){
  this.winner = hand.winner;
  this.score = hand.score;
  this.roundNum = hand.roundNum;
  this.pairbank = hand.pairbank;
  this.pairplyr = hand.pairplyr;
  this.natural = hand.natural;
}

function BeadRoad(road) {
  this.road = road | {};
  this.cells = [];
  this.activeColumn = 1;
  this.activeRow = 1;
}
BeadRoad.prototype.getNextCell = function () {
  // let row = this.activeRow + 1;
  let nextCell;
  if (this.activeColumn === 60 && this.activeRow === 6) {
    // todo handle full bead road
  } else if (this.activeRow % 6 === 0) {
    this.activeColumn++;
    this.activeRow = 1;
    nextCell = {
      r: this.activeRow,
      c: this.activeColumn,
    };
  } else {
    this.activeRow++;
    nextCell = {
      r: this.activeRow,
      c: this.activeColumn,
    };
  }
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
BeadRoad.prototype.getCoordsByCellNum = function (round) {
  let c = Math.floor(round / 6) + 1;
  let r = round - (c - 1) * 6;
  let coords = {
    x: c,
    y: r
  };
  console.log('coords = ' + coords);
  return coords;
};
BeadRoad.prototype.render = function () {
  let board = document.getElementById("beadroad");
  for (let i of this.cells) {
    console.log(i);
  }
};
BeadRoad.prototype.getNextCellOriginCoords = function () {
  let nextCell = this.getNextCell();
  let x = nextCell.c * 50 - 50;
  let y = nextCell.r * 50 - 50;
  console.log("x = " + x + " y = " + y);
};


