function Game() {
  this.currentRound = 1;
  this.gameID = Date.now();
  this.title = this.gameID;
  this.beadRoad = new BeadRoad(this.gameID);
  this.rounds = new Array();
  this.rounds.push({ game: this.gameID });
  this.beadRoad.renderBeadRoad(this.rounds);
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
  this.renderBeadRoad();
  this.serialize();
};

Game.prototype.renderBeadRoad = function () {
  this.beadRoad.render(this.rounds);
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
Game.prototype.deserialize = async function (storedString) {
  let gameobj = await JSON.parse(storedString);
  if (debugGame) {
    console.log(storedString);
    console.log(gameobj);
  }
  await this.setGameID(gameobj.id);
  this.rounds = new Array();
  await this.rounds.push({ game: this.gameID });

  let arr = await JSON.parse(gameobj.rounds);
  await this.setRounds(arr);
  await this.setCurrentRound(gameobj.currentRound);
  await this.renderBeadRoad();
  if (debugGame) {
    console.log("deserialize:getgameId: " + this.getGameID());
    console.log("deserialize:getCurrentRound: " + this.getCurrentRound());
    console.log("deserialize:rounds.length: " + this.rounds.length);
    console.log("this.rounds array = ");
    for (let i = 0; i < this.rounds.length; i++) {
      console.log(this.rounds[i]);
    }
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
