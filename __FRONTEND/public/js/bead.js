var placeBead = false;
document.addEventListener("DOMContentLoaded", function () {
  const BEADRDsvg = document.querySelector(".bead-road-svg");
  const BEADRDsvgns = "http://www.w3.org/2000/svg";

  let winW = window.innerWidth;
  const BEADRDfakePadding = 5;
  let winW50 = winW * 0.5;

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
      if (placeBead === true) {
        function beadFactory(winner) {
          let BEADRDBead = document.createElementNS(BEADRDsvgns, "circle");
          BEADRDsvg.appendChild(BEADRDBead);
          BEADRDBead.classList.add("big-road-bead");
          function getBeadColor(winner) {
            let randomNum = Math.ceil(Math.random() * 3);
            console.log("random = " + randomNum);
            if (winner === "BANKER") {
              return "#228be6";
            } else if (winner === "PLAYER") {
              return "#f03e3e";
            } else {
              return "#40c057";
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
      }
    }
  }
});
