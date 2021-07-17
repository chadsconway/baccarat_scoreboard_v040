

const BIGRDsvg = document.querySelector(".big-road-svg");
const BIGRDsvgns = "http://www.w3.org/2000/svg";
const BIGRDwidth = 50;
const BIGRDheight = 50;
const BIGRDcolumns = 60;
const BIGRDrows = 6;
const BIGRDfakePadding = 10; // this will be the overall padding and the space between rectangles
const BIGRDcolorArray = ["#FFFFFF"];
let BIGRDcounter = 0;
let BIGRDcol = 1;
let BIGRDrow = 1;
let BIGRDcell = {
	number: BIGRDcounter,
	column: BIGRDcol,
	row: BIGRDrow
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
		width: 1500,
		height: 200,
		viewBox: "0 0 " + BIGRDsvgWidth + " " + BIGRDsvgHeight
	}
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
				"data-cell-row": BIGRDcellrow
			},
			x: BIGRDnewX,
			y: BIGRDnewY,
			width: BIGRDwidth,
			height: BIGRDheight,
			fill: "#ffffff"
		});

		BIGRDnewRect.addEventListener("click", function (e) {
			let num =  e.originalTarget.dataset.cellNumber;
			let col =  e.originalTarget.dataset.cellColumn;
			let row =    e.originalTarget.dataset.cellRow;
			
			let clicked = {
				num: num,
				col: col,
				row: row
			}
			console.log("click event on:");
			console.log("cell number = " + num);
			console.log("column = " + col);
			console.log("row = " + row);
			return clicked;
		});

		BIGRDsvg.appendChild(BIGRDnewRect);
	
	
	
	}

};


		function setBead(){
				let BIGRDBead = document.createElementNS(BIGRDsvgns, "circle");
		
		BIGRDBead.classList.add("big-road-bead");
		var BEADCOLOR = getBEADCOLOR(BIGRDcellnumber, BIGRDcellrow, BIGRDcellcolumn);
		gsap.set(BIGRDBead, {
			attr: {
				"data-cell-number": BIGRDcellnumber,
				cx: BIGRDnewX + BIGRDwidth / 2,
				cy: BIGRDnewY + BIGRDheight / 2,
				r: 20,
				'stroke-width': "10px",
				stroke: BEADCOLOR,
				fill: "none"
			}
		});
		BIGRDsvg.appendChild(BIGRDBead);	
		
		let BIGRDTie =  document.createElementNS(BIGRDsvgns, "line");
		
		gsap.set(BIGRDTie, {
			attr: {
				"data-cell-number": BIGRDcellnumber,
				x1: BIGRDnewX + BIGRDwidth,
				y1: BIGRDnewY,
				x2: BIGRDnewX,
				y2: BIGRDnewY + BIGRDheight,				
				'stroke-width': "10px",
				stroke: "#40c057",
				fill: "none"
			}
		});
		if(BIGRDcellnumber % 17 === 0 && BEADCOLOR !== "none"){
		 BIGRDsvg.appendChild(BIGRDTie);
		 BIGRDTie.classList.add("big-road-tie"); 
		}
		}