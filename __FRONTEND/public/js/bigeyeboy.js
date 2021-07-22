var placeBead = false;
document.addEventListener("DOMContentLoaded", function () {
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const winW90 = winW * 0.9;
  const winW05 = winW * 0.05;

  const BIGEYERDsvg = document.querySelector(".bigeye-road-svg");
  const BIGEYERDsvgns = "http://www.w3.org/2000/svg";

  const BIGEYERDwidth = 50;
  const BIGEYERDheight = 50;
  const BIGEYERDcolumns = 60;
  const BIGEYERDrows = 6;
  const BIGEYERDfakePadding = 5;
  const BIGEYERDcolorArray = ["#FFFFFF"];
  let BIGEYERDcounter = 0;
  let BIGEYERDcol = 1;
  let BIGEYERDrow = 1;
  let BIGEYERDcell = {
    number: BIGEYERDcounter,
    column: BIGEYERDcol,
    row: BIGEYERDrow,
  };
  let BIGEYERDcells = [];

  let BIGEYERDcellnumber = `${BIGEYERDcounter}`;
  let BIGEYERDcellrow = `${BIGEYERDrow}`;
  let BIGEYERDcellcolumn = `${BIGEYERDcol}`;
  const BIGEYERDsvgWidth =
    BIGEYERDwidth * BIGEYERDcolumns +
    (BIGEYERDcolumns + 1) * BIGEYERDfakePadding;
  const BIGEYERDsvgHeight =
    BIGEYERDheight * BIGEYERDrows + (BIGEYERDrows + 1) * BIGEYERDfakePadding;

  gsap.set(BIGEYERDsvg, {
    attr: {
      "data-cell-number": BIGEYERDcellnumber,
      "data-cell-column": BIGEYERDcellcolumn,
      "data-cell-row": BIGEYERDcellrow,

      viewBox: "0 0 " + BIGEYERDsvgWidth + " " + BIGEYERDsvgHeight,
    },
  });
  for (let k = 0; k < BIGEYERDcolumns; k++) {
    for (let m = 0; m < BIGEYERDrows; m++) {
      BIGEYERDcounter++;
      let BIGEYERDcellnumber = `${BIGEYERDcounter}`;
      let BIGEYERDcellrow = `${m + 1}`;
      let BIGEYERDcellcolumn = `${k + 1}`;
      let BIGEYERDnewRect = document.createElementNS(BIGEYERDsvgns, "rect");
      let BIGEYERDnewX =
        (BIGEYERDwidth + BIGEYERDfakePadding) * k + BIGEYERDfakePadding;
      let BIGEYERDnewY =
        (BIGEYERDheight + BIGEYERDfakePadding) * m + BIGEYERDfakePadding;
      gsap.set(BIGEYERDnewRect, {
        attr: {
          "data-cell-number": BIGEYERDcellnumber,
          "data-cell-column": BIGEYERDcellcolumn,
          "data-cell-row": BIGEYERDcellrow,
        },
        x: BIGEYERDnewX,
        y: BIGEYERDnewY,
        width: BIGEYERDwidth,
        height: BIGEYERDheight,
        fill: "#ffffff",
      });
      BIGEYERDsvg.appendChild(BIGEYERDnewRect);
      if (placeBead === true) {
        function beadFactory(winner) {
          let BIGEYERDBead = document.createElementNS(BIGEYERDsvgns, "circle");
          BIGEYERDsvg.appendChild(BIGEYERDBead);
          BIGEYERDBead.classList.add("bigeye-road-bead");
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
          gsap.set(BIGEYERDBead, {
            attr: {
              "data-cell-number": BIGEYERDcsellnumber,
              cx: BIGEYERDnewX + BIGEYERDwidth / 2,
              cy: BIGEYERDnewY + BIGEYERDheight / 2,
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
