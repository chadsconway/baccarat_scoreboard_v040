function Game() {
  this.currentRound = 1;
  this.gameID = Date.now();
  this.title = this.gameID;
  this.beadRoad = new BeadRoad();
  this.rounds = new Array();
  // this.bigRoad = new BigRoad();
  // this.bigEyeBoyRoad = new BigEyeBoyRoad();
  // this.smallRoad = new SmallRoad();
  // this.cockRoachRoad = new CockRoachRoad();
}
Game.prototype.getGameID = function () {
  return this.gameID;
};
Game.prototype.getTitle = function () {
  return this.title;
};
Game.prototype.getRounds = function () {
  return this.rounds;
};
Game.prototype.getBeadRoad = function () {
  return this.beadRoad;
};
Game.prototype.getCurrentRound = function () {
  return this.currentRound;
};
Game.prototype.setGameID = function (id) {
  this.gameID = id;
};
Game.prototype.setTitle = function (title) {
  this.title = title;
};
Game.prototype.setCurrentRound = function (roundNum) {
  this.currentRound = roundNum;
};
Game.prototype.setRounds = function (rounds) {
  this.rounds = [...rounds];
};
Game.prototype.setBeadRoad = function (beadRoad) {
  this.beadRoad = beadRoad;
};
Game.prototype.addRound2Rounds = function (round) {
  this.rounds.push(round);
};
Game.prototype.incCurrentRound = function () {
  this.currentRound++;
  if (debugGame) {
    console.log("nextRound = " + this.currentRound);
  }
};
Game.prototype.recordRound = function (winner) {
  let round = new Round();
  round.num = this.getCurrentRound();
  round.game = this.getGameID();
  round.winner = winner;
  if (debugGame) {
    console.log("GAME.PROTOTYPE.RECORDROUND::");
    console.log("console.table(round):");
    console.table(round);
  }
  if (this.getRounds() === undefined) {
    let rounds = new Array(round);
    this.setRounds(rounds);
  } else {
    let rounds = this.getRounds();
    rounds.push(round);
    this.setRounds(rounds);
  }
  if (debugGame) {
    console.log("this.rounds.length = " + this.rounds.length);
    console.log("After this.rounds.push(round), console.table(rounds):");
    console.table(this.rounds);
  }
  this.incCurrentRound();
  this.render();
  this.serialize();
};

Game.prototype.render = function () {
  // todo
};

Game.prototype.log = function () {
  console.table([this.currentRound, this.gameID, this.rounds, this.title]);
};
Game.prototype.serialize = function () {
  roundsArr = [...this.rounds];
  let roundsString = JSON.stringify(this.rounds);
  let myobj = {
    id: this.gameID,
    rounds: roundsString,
    currentRound: this.currentRound,
    title: this.title,
    beadRoad: this.beadRoad,
  };
  myobj_serialized = JSON.stringify(myobj);
  window.localStorage.setItem("baccarat_game", myobj_serialized);
};
Game.prototype.deserialize = function (storedString) {
  let gameobj = JSON.parse(storedString);
  let arr = JSON.parse(gameobj.rounds);
  this.setRounds(arr);
  if (debugGame) {
    console.log(storedString);
    console.log(gameobj);
  }
  this.setGameID(gameobj.id);
  this.setCurrentRound(gameobj.currentRound);
  this.setBeadRoad(gameobj.beadRoad);
  if (debugGame) {
    console.log("deserialize:getgameId: " + this.getGameID());
    console.log("deserialize:getCurrentRound: " + this.getCurrentRound());
    console.log("deserialize:rounds.length: " + this.rounds.length);
    console.table(this.getBeadRoad());
  }
};

function GameLibrary() {
  this.games = [];
}
GameLibrary.prototype.addGame = function (game) {
  this.games.push(game);
};
GameLibrary.prototype.getGameByID = function (id) {
  let gamesFiltered = this.games.filter((game) => game.id === id);
  return gamesFiltered;
};
GameLibrary.prototype.getGameByTitle = function (title) {
  let gamesWithTitle = this.games.filter((game) => game.title === title);
  return gamesFiltered;
};