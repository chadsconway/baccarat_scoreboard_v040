/*********************************
Start CellLibrary
*******************************/
function CellLibrary() {
  this.cells = [];
}
CellLibrary.prototype.resetLibrary = function () {
  let num = 1;
  let column = 1;
  let row = 1;
  for (let i = 1; i <= 360; i++) {
    let cell = new Cell();
    cell.setNumber(num);
    cell.setColumn(column);
    cell.setRow(row);
    this.cells[i] = cell;
    num++;
    row++;
    if (num % 6 === 0) {
      column++;
      row = 1;
    }
  }
};
CellLibrary.prototype.setCell = function (number, column, row, winner, ties) {
  let cell = new Cell();
};

CellLibrary.prototype.setBeadColRow = function (column, row, bead) {
  let filtered = cells.filter((cell) => cell.getColumn() === column);
  let cell = filtered.filter((cell) => cell.getRow() === row);
  cell.setWinner(bead);
  //todo
};
CellLibrary.prototype.setTiesColRow = function (column, row, ties) {
  let filtered = cells.filter((cell) => cell.getColumn() === column);
  let cell = filtered.filter((cell) => cell.getRow() === row);
  cell.setTies(ties);
  //todo
};
CellLibrary.prototype.getCellByNumber = function (cellnum) {
  return cells[cellnum];
};
CellLibrary.prototype.getCellsByColumn = function (column) {
  let cellColumn = cells.filter((cell) => cell.getColumn() === column);
  return cellColumn;
};
CellLibrary.prototype.getCellsByRow = function (row) {
  let cellRow = cells.filter((cell) => cell.getRow() === row);
  return cellRow;
};
CellLibrary.prototype.listCells = function () {
  this.cells.forEach(function (val, ind, arr) {
    console.log();
  });
};
/*********************************
End CellLibrary
Start Cell
*******************************/
function Cell() {
  this.bead = "";
  this.ties = 0;
  this.number = 0;
  this.column = 0;
  this.row = 0;
}

Cell.prototype.setNumber = function (number) {
  this.number = number;
};
Cell.prototype.setRow = function (row) {
  this.row = row;
};
Cell.prototype.setColumn = function (column) {
  this.column = column;
};
Cell.prototype.setWinner = function (winner) {
  this.winner = winner;
};
Cell.prototype.setTies = function (ties) {
  this.ties = ties;
};
/*********************************
End Cell
*******************************/
