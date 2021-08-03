function BigRoad(gameID) {
  this.cellMap = [...this.initializeMap()];
  this.activeCell = 1;
  this.activeRow = 1;
  this.activeColumn = 1;
  this.current = "NULL";
  this.round = 1;
}
BigRoad.prototype.publishRound = function (winner) {
  let flipflop = false;
  switch (winner) {
    case "BANKER":
      if (this.current === "BANKER") {
        break;
      } else if (this.current === "PLAYER") {
        flipflop = true;
        this.current = "BANKER";
        break;
      } else if (this.current === "NULL") {
        this.current = "BANKER";
        break;
      }

    case "PLAYER":
      if (this.current === "PLAYER") {
        break;
      } else if (this.current === "BANKER") {
        flipflop = true;
        this.current = "PLAYER";
        break;
      } else if (this.current === "NULL") {
        this.current = "PLAYER";
        break;
      }
    case "TIE":
      if (this.cellMap[this.activeColumn][this.activeRow].ties === false) {
        this.cellMap[this.activeColumn][this.activeRow].ties = true;
        this.cellMap[this.activeColumn][this.activeRow].rounds.push(this.round);
        this.addTieSlash(this.activeColumn, this.activeRow);
        this.round++;
      }
      break;
  }
  if (!flipflop && winner !== "TIE") {
    if (this.cellMap[this.activeColumn][this.activeRow].winner === "none") {
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    } else if (this.activeRow === 6) {
      this.activeColumn++;
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    } else if (
      this.cellMap[this.activeColumn][this.activeRow + 1].winner === "none"
    ) {
      this.activeRow++;
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    } else {
      this.activeColumn++;
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    }
  } else if (flipflop) {
    this.activeRow = 1;
    if (this.cellMap[this.activeColumn][1].winner === "none") {
      while (this.cellMap[this.activeColumn - 1][1].winner === "none") {
        this.activeColumn--;
      }
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    } else {
      this.activeColumn++;
      this.createBRBead(this.activeColumn, this.activeRow);
      this.cellMap[this.activeColumn][this.activeRow].winner = winner;
      this.round++;
    }
  }
};

BigRoad.prototype.addTieSlash = function (column, row) {
  const ns = "http://www.w3.org/2000/svg";
  let TieSlash = document.createElementNS(ns, "line");
  let coords = this.getCellCoords(column, row);
  let x1 = coords.x + 50;
  let x2 = coords.x;
  let y1 = coords.y;
  let y2 = coords.y + 50;
  TieSlash.setAttribute("x1", x1);
  TieSlash.setAttribute("y1", y1);
  TieSlash.setAttribute("x2", x2);
  TieSlash.setAttribute("y2", y2);
  TieSlash.setAttribute("stroke", "#40c057");
  TieSlash.setAttribute("stroke-width", 5);
  let bigroadsvg = document.querySelector(".big-road-svg");
  bigroadsvg.appendChild(TieSlash);
};

BigRoad.prototype.createBRBead = function (column, row) {
  let coords = this.getCellCoords(column, row);
  let cx = coords.x + 25;
  let cy = coords.y + 25;
  const ns = "http://www.w3.org/2000/svg";
  let BRbead = document.createElementNS(ns, "circle");
  let BRbeadcolor;
  if (this.current === "BANKER") {
    BRbeadcolor = "#f03e3e";
  } else {
    BRbeadcolor = "#228be6";
  }
  BRbead.setAttribute("stroke", BRbeadcolor);
  BRbead.setAttribute("stroke-width", 5);
  BRbead.setAttribute("cx", cx);
  BRbead.setAttribute("cy", cy);
  BRbead.setAttribute("r", 20);
  BRbead.setAttribute("fill", "none");
  // BRbead.setAttribute("x", coords.x);
  // BRbead.setAttribute("y", coords.y);
  // BRbead.setAttribute("data-BRbead-cell", cell.u);
  // BRbead.classList.add(`BRbead-cell-${cell.u}`);
  //  BRbeadsvg.appendChild(BRbead);
  let bigroadsvg = document.querySelector(".big-road-svg");
  bigroadsvg.appendChild(BRbead);
};

BigRoad.prototype.getCoordsByCellNum = function (round) {
  cellMap;
  let y = row * 55 - 50;
  return { x: x, y: y };
};
BigRoad.prototype.shiftColumnsLeft = function () {
  // todo
};
BigRoad.prototype.clearCell = function (node, cell) {
  let parent = document.querySelector(".BRbead-road-svg");
  if (node === "BRbead") {
    try {
      let selector = `.BRbead-cell-${cell}`;
      let node = document.querySelector(selector);
      parent.removeChild(node);
    } catch (err) {
      return "not_a_node";
    }
  }
  // todo
};

BigRoad.prototype.initializeMap = function () {
  let columns = [];
  for (let i = 1; i <= 60; i++) {
    let row = [];
    for (let j = 1; j <= 6; j++) {
      let cell = {
        rounds: [],
        winner: "none",
        ties: false,
      };
      row[j] = cell;
    }
    columns[i] = row;
  }
  if (debugBigRoad) {
    console.log(columns);
  }
  return columns;
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
