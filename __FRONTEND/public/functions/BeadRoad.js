/**
function Cell(cellNumber) {
  this.cellNumber = cellNumber;
  this.column = Math.floor(cellNumber / 6) + 1;
  this.row = cellNumber - (this.column - 1) * 6;
}
Cell.prototype.getCoords = function () {
  let coords = {
    x: this.column,
    y: this.row,
  };
  return coords;
};
Cell.prototype.addRound = function (round) {
  let winner = round.winner;
};
*/
function BeadRoad(gameID) {
  this.cellList = new Array();
  this.cellList.push({ game: gameID });
  for (let i = 1; i < 361; i++) {
    this.cellList.push({ winner: "NONE" });
  }
  console.log("new beadroad");
  console.log(this.cellList);
  this.activeRow = 1;
  this.activeColumn = 1;
}
BeadRoad.prototype.getBeadSVG = function (winner) {
  let svgelement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let beadSVG;
  if (winner === "banker") {
    beadSVG = `
  <svg class="bead">
  <circle id="bead-road-banker" style="fill: none; stroke: url(#color-1); stroke-width: 5px;" cx="25" cy="125" r="22.5" class="banker-bead-big-road big-road-bead"/>
  </svg>
  `;
  }
};
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
BeadRoad.prototype.setNextCell = function (round) {
  let next = this.getNextCell();
  let r = next.r;
  let c = next.c;
  let bead = new Bead("beadroad", round);
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
    y: r,
  };
  console.log("coords = " + coords);
  return coords;
};
BeadRoad.prototype.render = function () {
  let board = document.getElementById("beadroad");
};
BeadRoad.prototype.getNextCellOriginCoords = function () {
  let nextCell = this.getNextCell();
  let x = nextCell.c * 50 - 50;
  let y = nextCell.r * 50 - 50;
  console.log("x = " + x + " y = " + y);
};

/**
 *
 * ================================================
 *
 *
 * ================================================
 *
 *
 */

BeadRoad.prototype.setCell = function (cellNum, winner) {};

BeadRoad.prototype.renderBeadRoad = function (rounds) {
  if (rounds.length > 1) {
    for (let h = 1; h <= rounds.length; h++) {
      console.log(rounds[h].winner);
      this.cellList[h].winner = rounds[h].winner;
    }
  }
  if (debugBeadRoad) {
    console.log("beadRoad.cellList = ", this.cellList);
  }
  const BEADRDsvg = document.querySelector(".bead-road-svg");
  const BEADRDsvgns = "http://www.w3.org/2000/svg";

  const BEADRDfakePadding = 5;

  const BEADRDwidth = 50;
  const BEADRDheight = 50;
  const BEADRDcolumns = 30;
  const BEADRDvisibleColumns = 30;
  const BEADRDactualWidth =
    BEADRDvisibleColumns * (BEADRDwidth + BEADRDfakePadding) +
    BEADRDfakePadding;
  const BEADRDrows = 6;
  const BEADRDcolorArray = ["#FFFFFF"];
  let BEADRDcounter = 0;
  let BEADRDcol = 1;
  let BEADRDrow = 1;
  let BEADRDcell = {
    number: BEADRDcounter,
    column: BEADRDcol,
    row: BEADRDrow,
  };
  let BEADRDcells = [];

  let BEADRDcellnumber = `${BEADRDcounter}`;
  let BEADRDcellrow = `${BEADRDrow}`;
  let BEADRDcellcolumn = `${BEADRDcol}`;
  const BEADRDsvgWidth =
    BEADRDwidth * BEADRDcolumns + (BEADRDcolumns + 1) * BEADRDfakePadding;
  const BEADRDsvgHeight =
    BEADRDheight * BEADRDrows + (BEADRDrows + 1) * BEADRDfakePadding;

  gsap.set(BEADRDsvg, {
    attr: {
      "data-cell-number": BEADRDcellnumber,
      "data-cell-column": BEADRDcellcolumn,
      "data-cell-row": BEADRDcellrow,
      viewBox: "0 0 " + BEADRDsvgWidth + " " + BEADRDsvgHeight,
    },
  });
  for (let k = 0; k < BEADRDcolumns; k++) {
    for (let m = 0; m < BEADRDrows; m++) {
      BEADRDcounter++;
      let winner = this.cellList[BEADRDcounter].winner;
      let BEADRDcellnumber = `${BEADRDcounter}`;
      let BEADRDcellrow = `${m + 1}`;
      let BEADRDcellcolumn = `${k + 1}`;
      let BEADRDnewRect = document.createElementNS(BEADRDsvgns, "rect");
      let BEADRDnewX =
        (BEADRDwidth + BEADRDfakePadding) * k + BEADRDfakePadding;
      let BEADRDnewY =
        (BEADRDheight + BEADRDfakePadding) * m + BEADRDfakePadding;
      gsap.set(BEADRDnewRect, {
        attr: {
          "data-cell-number": BEADRDcellnumber,
          "data-cell-column": BEADRDcellcolumn,
          "data-cell-row": BEADRDcellrow,
        },
        x: BEADRDnewX,
        y: BEADRDnewY,
        width: BEADRDwidth,
        height: BEADRDheight,
        fill: "#ffffff",
      });
      BEADRDsvg.appendChild(BEADRDnewRect);

      //    }
    }
  }
};
