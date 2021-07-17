var placeBead = false;
document.addEventListener("DOMContentLoaded", function () {
  const COCKROACHRDsvg = document.querySelector(".cockroach-road-svg");
  const COCKROACHRDsvgns = "http://www.w3.org/2000/svg";

  const COCKROACHRDwidth = 50;
  const COCKROACHRDheight = 50;
  const COCKROACHRDcolumns = 60;
  const COCKROACHRDrows = 6;
  const COCKROACHRDfakePadding = 10;
  const COCKROACHRDcolorArray = ["#FFFFFF"];
  let COCKROACHRDcounter = 0;
  let COCKROACHRDcol = 1;
  let COCKROACHRDrow = 1;
  let COCKROACHRDcell = {
    number: COCKROACHRDcounter,
    column: COCKROACHRDcol,
    row: COCKROACHRDrow,
  };
  let COCKROACHRDcells = [];

  let COCKROACHRDcellnumber = `${COCKROACHRDcounter}`;
  let COCKROACHRDcellrow = `${COCKROACHRDrow}`;
  let COCKROACHRDcellcolumn = `${COCKROACHRDcol}`;
  const COCKROACHRDsvgWidth =
    COCKROACHRDwidth * COCKROACHRDcolumns +
    (COCKROACHRDcolumns + 1) * COCKROACHRDfakePadding;
  const COCKROACHRDsvgHeight =
    COCKROACHRDheight * COCKROACHRDrows +
    (COCKROACHRDrows + 1) * COCKROACHRDfakePadding;

  gsap.set(COCKROACHRDsvg, {
    attr: {
      "data-cell-number": COCKROACHRDcellnumber,
      "data-cell-column": COCKROACHRDcellcolumn,
      "data-cell-row": COCKROACHRDcellrow,
      width: 1500,
      height: 200,
      viewBox: "0 0 " + COCKROACHRDsvgWidth + " " + COCKROACHRDsvgHeight,
    },
  });
  for (let k = 0; k < COCKROACHRDcolumns; k++) {
    for (let m = 0; m < COCKROACHRDrows; m++) {
      COCKROACHRDcounter++;
      let COCKROACHRDcellnumber = `${COCKROACHRDcounter}`;
      let COCKROACHRDcellrow = `${m + 1}`;
      let COCKROACHRDcellcolumn = `${k + 1}`;
      let COCKROACHRDnewRect = document.createElementNS(
        COCKROACHRDsvgns,
        "rect"
      );
      let COCKROACHRDnewX =
        (COCKROACHRDwidth + COCKROACHRDfakePadding) * k +
        COCKROACHRDfakePadding;
      let COCKROACHRDnewY =
        (COCKROACHRDheight + COCKROACHRDfakePadding) * m +
        COCKROACHRDfakePadding;
      gsap.set(COCKROACHRDnewRect, {
        attr: {
          "data-cell-number": COCKROACHRDcellnumber,
          "data-cell-column": COCKROACHRDcellcolumn,
          "data-cell-row": COCKROACHRDcellrow,
        },
        x: COCKROACHRDnewX,
        y: COCKROACHRDnewY,
        width: COCKROACHRDwidth,
        height: COCKROACHRDheight,
        fill: "#ffffff",
      });
      COCKROACHRDsvg.appendChild(COCKROACHRDnewRect);
      if (placeBead === true) {
        function beadFactory(winner) {
          let COCKROACHRDBead = document.createElementNS(
            COCKROACHRDsvgns,
            "circle"
          );
          COCKROACHRDsvg.appendChild(COCKROACHRDBead);
          COCKROACHRDBead.classList.add("big-road-bead");
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
          gsap.set(COCKROACHRDBead, {
            attr: {
              "data-cell-number": COCKROACHRDcsellnumber,
              cx: COCKROACHRDnewX + COCKROACHRDwidth / 2,
              cy: COCKROACHRDnewY + COCKROACHRDheight / 2,
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
