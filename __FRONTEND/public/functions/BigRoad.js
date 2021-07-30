function BigRoad(gameID) {
  this.cellList = new Array();
  this.cellList.push({ game: gameID });
  this.activeCell = 1;
  this.activeRow = 1;
  this.activeColumn = 1;
}
BigRoad.prototype.publishRound = function (winner) {
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

BigRoad.prototype.createBead = function (winner, cell) {
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

BigRoad.prototype.getCoordsByCellNum = function (round) {
  let cell = {};
  cell.c = Math.floor(round / 6) + 1;
  cell.r = round - (c - 1) * 6;
  let coords = getCellCoords(cell);
  return coords;
};
BigRoad.prototype.render = function () {
  let board = document.getElementById("beadroad");
};
BigRoad.prototype.getCellCoords = function (cell) {
  let column = cell.c;
  let row = cell.r;
  let x = column * 55 - 50;
  let y = row * 55 - 50;
  return { x: x, y: y };
};
BigRoad.prototype.shiftColumnsLeft = function () {
  // todo
};
BigRoad.prototype.clearCell = function (node, cell) {
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
BigRoad.prototype.clearAll = function () {
  // todo
};

BigRoad.prototype.getBeadColor = function (winner) {
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

BigRoad.prototype.createBoard = function () {
  const BIGRDsvg = document.querySelector(".big-road-svg");
  const BIGRDsvgns = "http://www.w3.org/2000/svg";
  let winW = document.innerWidth;
  let winH = document.innerHeight;
  let winW90 = winW * 0.9;
  let winW05 = winW * 0.05;
  const BIGRDwidth = 50;
  const BIGRDheight = 50;
  const BIGRDcolumns = 60;
  const BIGRDrows = 6;
  const BIGRDfakePadding = 5; // this will be the overall padding and the space between rectangles
  const BIGRDcolorArray = ["#FFFFFF"];
  let BIGRDcounter = 0;
  let BIGRDcol = 1;
  let BIGRDrow = 1;
  let BIGRDcell = {
    number: BIGRDcounter,
    column: BIGRDcol,
    row: BIGRDrow,
  };
  let BIGRDcells = [];

  let BIGRDcellnumber = `${BIGRDcounter}`;
  let BIGRDcellrow = `${BIGRDrow}`;
  let BIGRDcellcolumn = `${BIGRDcol}`;

  const BIGRDsvgWidth =
    BIGRDwidth * BIGRDcolumns + (BIGRDcolumns + 1) * BIGRDfakePadding;
  const BIGRDsvgHeight =
    BIGRDheight * BIGRDrows + (BIGRDrows + 1) * BIGRDfakePadding;

  gsap.set(BIGRDsvg, {
    attr: {
      "data-cell-number": BIGRDcellnumber,
      "data-cell-column": BIGRDcellcolumn,
      "data-cell-row": BIGRDcellrow,
      viewBox: "0 0 " + BIGRDsvgWidth + " " + BIGRDsvgHeight,
    },
  });
  for (let k = 0; k < BIGRDcolumns; k++) {
    for (let m = 0; m < BIGRDrows; m++) {
      BIGRDcounter++;
      let BIGRDcellnumber = `${BIGRDcounter}`;
      let BIGRDcellrow = `${m + 1}`;
      let BIGRDcellcolumn = `${k + 1}`;
      let BIGRDnewRect = document.createElementNS(BIGRDsvgns, "rect");
      let BIGRDnewX = (BIGRDwidth + BIGRDfakePadding) * k + BIGRDfakePadding;
      let BIGRDnewY = (BIGRDheight + BIGRDfakePadding) * m + BIGRDfakePadding;
      gsap.set(BIGRDnewRect, {
        attr: {
          "data-cell-number": BIGRDcellnumber,
          "data-cell-column": BIGRDcellcolumn,
          "data-cell-row": BIGRDcellrow,
        },
        x: BIGRDnewX,
        y: BIGRDnewY,
        width: BIGRDwidth,
        height: BIGRDheight,
        fill: "#ffffff",
      });

      BIGRDnewRect.addEventListener("click", function (e) {
        let num = e.originalTarget.dataset.cellNumber;
        let col = e.originalTarget.dataset.cellColumn;
        let row = e.originalTarget.dataset.cellRow;

        let clicked = {
          num: num,
          col: col,
          row: row,
        };
        console.log("click event on:");
        console.log("cell number = " + num);
        console.log("column = " + col);
        console.log("row = " + row);
        return clicked;
      });

      BIGRDsvg.appendChild(BIGRDnewRect);
    }
  }
};
