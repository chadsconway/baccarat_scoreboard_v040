function Render(id) {
  this.gameid = id;
  this.beadroad = {};
  this.bigroad = {};
  this.bigroad.elem = document.querySelector(".big-road-svg");
  this.smallroad = {};
  this.smallroad.elem = document.querySelector(".small-road-svg");
  this.bigeyeroad = {};
  this.bigeyeroad.elem = document.querySelector(".bigeye-road-svg");
  this.cockroachroad = {};
  this.cockroachroad.elem = document.querySelector(".cockroach-road-svg");
}
Render.prototype.createBoards = function () {
  this.beadroad = new BeadRoad(this.gameid);
  this.beadroad.createBoard();
  // this.bigRoad.road = new BigRoad();
  // this.bigeyeroad.road = new BigEyeBoyRoad();
  // this.smallroad = new SmallRoad();
  // this.cockroachroad = new CockRoachRoad();
};
Render.prototype.clearAll = function () {
  this.beadroad.clearAll();
};
Render.prototype.setCells = function (winner) {
  this.beadroad.setCell(winner);
};
