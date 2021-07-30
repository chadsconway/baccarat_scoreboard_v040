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
var BeadRoadviewBoxRef = "0 0 0 0";
function BeadRoad(gameID) {
  this.cellList = new Array();
  this.cellList.push({ game: gameID });
  this.activeCell = 1;
  this.activeRow = 1;
  this.activeColumn = 1;
  if (debugBeadRoad) {
    this.activeColumn = 30;
  }
}
BeadRoad.prototype.publishRound = function (winner) {
  let cell = {};
  cell.u = this.activeCell;
  cell.r = this.activeRow;
  cell.c = this.activeColumn;
  let bead = this.createBead(winner, cell);
  let elem = document.querySelector(".bead-road-svg");
  elem.appendChild(bead);
  this.cellList[cell.u] = {
    cell: cell.u,
    row: cell.r,
    column: cell.c,
    winner: winner,
  };
  this.incrementCell();
};
BeadRoad.prototype.incrementCell = function () {
  this.activeCell++;
  if (this.activeColumn >= 30 && this.activeRow === 6) {
    let offset = (this.activeColumn - 29) * 55 + 5;
    let brsvg = document.querySelector(".bead-road-svg");
    BeadRoadviewBoxRef.x = offset;
    brsvg.setAttribute(
      "viewBox",
      `${BeadRoadviewBoxRef.x} ${BeadRoadviewBoxRef.y} ${BeadRoadviewBoxRef.width} ${BeadRoadviewBoxRef.height}`
    );
    if (debugBeadRoad) {
      console.log("updated viewBox offsetr = " + offset);
      console.table(BeadRoadviewBoxRef);
    }
  }
  if (this.activeRow === 6) {
    this.activeColumn++;
    this.activeRow = 1;
  } else {
    this.activeRow++;
  }
  if (debugBeadRoad) {
    console.log("ActiveCell = " + this.activeCell);
    console.log("activeRow = " + this.activeRow);
    console.log("activeColumn = " + this.activeColumn);
  }
};
BeadRoad.prototype.createBead = function (winner, cell) {
  const beadcolor = this.getBeadColor(winner);
  const coords = this.getCellCoords(cell);
  let cx = coords.x + 25;
  let cy = coords.y + 25;
  const ns = "http://www.w3.org/2000/svg";
  // const beadsvg = document.createElementNS(ns, "svg");
  const bead = document.createElementNS(ns, "circle");
  // beadsvg.setAttribute("viewBox", "0 0 50 50");
  bead.setAttribute("fill", beadcolor);
  bead.setAttribute("cx", cx);
  bead.setAttribute("cy", cy);
  bead.setAttribute("r", 25);
  bead.setAttribute("x", coords.x);
  bead.setAttribute("y", coords.y);
  bead.setAttribute("data-bead-cell", cell.u);
  bead.classList.add(`bead-cell-${cell.u}`);
  //  beadsvg.appendChild(bead);
  return bead;
};

BeadRoad.prototype.getCoordsByCellNum = function (round) {
  let cell = {};
  cell.c = Math.floor(round / 6) + 1;
  cell.r = round - (c - 1) * 6;
  let coords = getCellCoords(cell);
  return coords;
};
BeadRoad.prototype.render = function () {
  let board = document.getElementById("beadroad");
};
BeadRoad.prototype.getCellCoords = function (cell) {
  let column = cell.c;
  let row = cell.r;
  let x = column * 55 - 50;
  let y = row * 55 - 50;
  return { x: x, y: y };
};
BeadRoad.prototype.shiftColumnsLeft = function () {
  // todo
};
BeadRoad.prototype.clearCell = function (node, cell) {
  let parent = document.querySelector(".bead-road-svg");
  if (node === "bead") {
    try {
      let selector = `.bead-cell-${cell}`;
      let node = document.querySelector(selector);
      parent.removeChild(node);
    } catch (err) {
      return "not_a_node";
    }
  }
  // todo
};
BeadRoad.prototype.clearAll = function () {
  // todo
};

BeadRoad.prototype.getBeadColor = function (winner) {
  if (winner === "BANKER") {
    return "#f03e3e";
  } else if (winner === "PLAYER") {
    return "#228be6";
  } else if (winner === "TIE") {
    return "#40c057";
  } else if (winner === "NONE") {
    return "none";
  }
};

BeadRoad.prototype.createBoard = function () {
  if (debugBeadRoad) {
    console.log("beadRoad.cellList = ", this.cellList);
  }
  const BEADRDsvg = document.querySelector(".bead-road-svg");
  const BEADRDsvgns = "http://www.w3.org/2000/svg";

  let winW = window.innerWidth;
  const BEADRDfakePadding = 5;
  let winW50 = winW * 0.5;

  const BEADRDwidth = 50;
  const BEADRDheight = 50;
  const BEADRDcolumns = 60;
  const BEADRDvisibleColumns = 30;
  const BEADRDactualWidth =
    BEADRDcolumns * (BEADRDwidth + BEADRDfakePadding) + BEADRDfakePadding;
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
  const BEADRDviewBoxWidth =
    (BEADRDwidth + BEADRDfakePadding) * 30 + BEADRDfakePadding;
  gsap.set(BEADRDsvg, {
    attr: {
      "data-cell-number": BEADRDcellnumber,
      "data-cell-column": BEADRDcellcolumn,
      "data-cell-row": BEADRDcellrow,
      viewBox: "0 0 " + BEADRDviewBoxWidth + " " + BEADRDsvgHeight,
    },
  });
  BeadRoadviewBoxRef = {
    x: 0,
    y: 0,
    width: BEADRDviewBoxWidth,
    height: BEADRDsvgHeight,
  };
  if (debugBeadRoad) {
    console.table(BeadRoadviewBoxRef);
  }
  for (let k = 0; k < BEADRDcolumns; k++) {
    for (let m = 0; m < BEADRDrows; m++) {
      BEADRDcounter++;
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
      // if (placeBead === true) {
      function beadFactory(winner) {
        let BEADRDBead = document.createElementNS(BEADRDsvgns, "circle");
        BEADRDsvg.appendChild(BEADRDBead);
        BEADRDBead.classList.add("bead-road-bead");
        function getBeadColor(winner) {
          let randomNum = Math.ceil(Math.random() * 3);
          console.log("random = " + randomNum);
          if (winner === "BANKER") {
            return "#C92A2A";
          } else if (winner === "PLAYER") {
            return "#1864AB";
          } else if (winner === "TIE") {
            return "#2B8A3E";
          } else if (winner === "NONE") {
            return "none";
          }
        }
        let beadColor = getBeadColor(winner);
        gsap.set(BEADRDBead, {
          attr: {
            "data-cell-number": BEADRDcsellnumber,
            cx: BEADRDnewX + BEADRDwidth / 2,
            cy: BEADRDnewY + BEADRDheight / 2,
            r: 25,
            stroke: "none",
            fill: beadColor,
          },
        });
      }
      //    }
    }
  }
};
