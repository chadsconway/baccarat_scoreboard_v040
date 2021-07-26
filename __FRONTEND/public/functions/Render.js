function Render() {
  this.bead = document.querySelector(".bead-road-svg");
  this.big = document.querySelector(".big-road-svg");
  this.small = document.querySelector(".small-road-svg");
  this.bigeye = document.querySelector(".bigeye-road-svg");
  this.cockroach = document.querySelector(".cockroach-road-svg");
}
// if (placeBead === true) {
function beadFactory(winner) {
  let BEADRDBead = document.createElementNS(BEADRDsvgns, "circle");
  BEADRDsvg.appendChild(BEADRDBead);
  BEADRDBead.classList.add("bead-road-bead");
  function getBeadColor(winner) {
    let randomNum = Math.ceil(Math.random() * 3);
    console.log("random = " + randomNum);
    if (winner === "BANKER") {
      return "#228be6";
    } else if (winner === "PLAYER") {
      return "#f03e3e";
    } else if (winner === "TIE") {
      return "#40c057";
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
