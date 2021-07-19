var placeBead = false;
document.addEventListener("DOMContentLoaded", function () {
  const SMALLRDsvg = document.querySelector(".small-road-svg");
  const SMALLRDsvgns = "http://www.w3.org/2000/svg";

  const SMALLRDwidth = 50;
  const SMALLRDheight = 50;
  const SMALLRDcolumns = 60;
  const SMALLRDrows = 6;
  const SMALLRDfakePadding = 10;
  const SMALLRDcolorArray = ["#FFFFFF"];
  let SMALLRDcounter = 0;
  let SMALLRDcol = 1;
  let SMALLRDrow = 1;
  let SMALLRDcell = {
    number: SMALLRDcounter,
    column: SMALLRDcol,
    row: SMALLRDrow,
  };
  let SMALLRDcells = [];

  let SMALLRDcellnumber = `${SMALLRDcounter}`;
  let SMALLRDcellrow = `${SMALLRDrow}`;
  let SMALLRDcellcolumn = `${SMALLRDcol}`;
  const SMALLRDsvgWidth =
    SMALLRDwidth * SMALLRDcolumns + (SMALLRDcolumns + 1) * SMALLRDfakePadding;
  const SMALLRDsvgHeight =
    SMALLRDheight * SMALLRDrows + (SMALLRDrows + 1) * SMALLRDfakePadding;

  gsap.set(SMALLRDsvg, {
    attr: {
      "data-cell-number": SMALLRDcellnumber,
      "data-cell-column": SMALLRDcellcolumn,
      "data-cell-row": SMALLRDcellrow,
      width: 1800,
      height: 300,
      viewBox: "0 0 " + SMALLRDsvgWidth + " " + SMALLRDsvgHeight,
    },
  });
  for (let k = 0; k < SMALLRDcolumns; k++) {
    for (let m = 0; m < SMALLRDrows; m++) {
      SMALLRDcounter++;
      let SMALLRDcellnumber = `${SMALLRDcounter}`;
      let SMALLRDcellrow = `${m + 1}`;
      let SMALLRDcellcolumn = `${k + 1}`;
      let SMALLRDnewRect = document.createElementNS(SMALLRDsvgns, "rect");
      let SMALLRDnewX =
        (SMALLRDwidth + SMALLRDfakePadding) * k + SMALLRDfakePadding;
      let SMALLRDnewY =
        (SMALLRDheight + SMALLRDfakePadding) * m + SMALLRDfakePadding;
      gsap.set(SMALLRDnewRect, {
        attr: {
          "data-cell-number": SMALLRDcellnumber,
          "data-cell-column": SMALLRDcellcolumn,
          "data-cell-row": SMALLRDcellrow,
        },
        x: SMALLRDnewX,
        y: SMALLRDnewY,
        width: SMALLRDwidth,
        height: SMALLRDheight,
        fill: "#ffffff",
      });
      SMALLRDsvg.appendChild(SMALLRDnewRect);
      if (placeBead === true) {
        function beadFactory(winner) {
          let SMALLRDBead = document.createElementNS(SMALLRDsvgns, "circle");
          SMALLRDsvg.appendChild(SMALLRDBead);
          SMALLRDBead.classList.add("big-road-bead");
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
          gsap.set(SMALLRDBead, {
            attr: {
              "data-cell-number": SMALLRDcsellnumber,
              cx: SMALLRDnewX + SMALLRDwidth / 2,
              cy: SMALLRDnewY + SMALLRDheight / 2,
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
