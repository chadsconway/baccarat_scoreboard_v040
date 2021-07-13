console.clear();
const board = "bigroad";
const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";

const width = 50;
const height = 50;
const columns = 60;
const rows = 6;
const fakePadding = 10; // this will be the overall padding and the space between rectangles
const colorArray = ["#FFFFFF"];
let counter = 0;
let col = 1;
let row = 1;
let cell = {
	number: counter,
	column: col,
	row: row
};
let cells = [];

let cellnumber = `n${counter}`;
let cellrow = `r${row}`;
let cellcolumn = `c${col}`;
// figure the new svg width/height
const svgWidth = width * columns + (columns + 1) * fakePadding;
const svgHeight = height * rows + (rows + 1) * fakePadding;

gsap.set(svg, {
	attr: {
		"data-cell-number": cellnumber,
		"data-cell-column": cellcolumn,
		"data-cell-row": cellrow,
		width: svgWidth,
		height: svgHeight,
		viewBox: "0 0 " + svgWidth + " " + svgHeight
	}
});
for (let i = 0; i < columns; i++) {
	for (let j = 0; j < rows; j++) {
		counter++;
		let cellnumber = `${counter}`;
		let cellrow = `${j + 1}`;
		let cellcolumn = `${i + 1}`;
		let newRect = document.createElementNS(svgns, "rect");
		let newX = (width + fakePadding) * i + fakePadding;
		let newY = (height + fakePadding) * j + fakePadding;
		gsap.set(newRect, {
			attr: {
				"data-cell-number": cellnumber,
				"data-cell-column": cellcolumn,
				"data-cell-row": cellrow
			},
			x: newX,
			y: newY,
			width: width,
			height: height,
			fill: colorArray[counter % colorArray.length]
		});
		/** 
			newRect.addEventListener("click", function (e) {
			console.log("click event on:");
			console.log("cell number = " + e.originalTarget.dataset.cellNumer);
			console.log("column = " + e.originalTarget.dataset.cellColumn);
			console.log("row = " + e.originalTarget.dataset.cellRow);
		});
		*/
		svg.appendChild(newRect);
		let txt = document.createElementNS(svgns, "text");
		txt.textContent = counter;
		svg.appendChild(txt);
		gsap.set(txt, {
			attr: {
				x: newX + width / 2,
				y: newY + height / 2
			}
		});
	}
}