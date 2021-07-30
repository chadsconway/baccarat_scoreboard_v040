function Game() {
  this.currentRound = 1;
  this.gameID = Date.now();
  this.title = this.gameID;
  this.rounds = new Array();
  this.stats = new Stats();
  this.rounds.push({ game: this.gameID });
  this.beadRoad = new BeadRoad();
  this.beadRoad.createBoard();
  this.bigRoad = new BigRoad();
  this.bigRoad.createBoard();
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
  /**
   * Game Object housekeeping
   */
  let round = new Round();
  round.num = this.getCurrentRound();
  round.game = this.getGameID();
  round.winner = winner;
  /**
   * if new game, initialize an array
   */
  if (this.getRounds() === undefined) {
    let rounds = new Array(round);
    this.setRounds(rounds);
  } else {
    let rounds = this.getRounds();
    rounds.push(round);
    this.setRounds(rounds);
  }
  // store in localStorage
  this.serialize();
  this.incCurrentRound();
  this.publishRound(winner);
};
Game.prototype.publishRound = function (winner) {
  /**
   *
   * Updates needed each new round:
   * Stats
   * Beadroad
   * BigRoad
   * BigEyeBoy
   * Small
   * Cockroach
   *
   *
   */
  /**
   * Update stats
   */
  if (winner === "BANKER") {
    this.stats.incBanker();
  } else if (winner === "PLAYER") {
    this.stats.incPlayer();
  } else {
    this.stats.incTie();
  }
  this.stats.incRounds();
  this.stats.updateStatsDisplay();
  this.beadRoad.publishRound(winner);
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
  if (debugGame) {
    console.log("in Game.prototype.deserialize:");
    console.log(arr);
  }

  // await this.setRounds(arr);
  // await this.setCurrentRound(gameobj.currentRound);
  if (debugGame) {
    console.log("deserialize:getgameId: " + this.getGameID());
    console.log("deserialize:getCurrentRound: " + this.getCurrentRound());
    console.log("deserialize:rounds.length: " + this.rounds.length);
    console.log("this.rounds array = ");
    for (let i = 0; i < this.rounds.length; i++) {
      console.log(this.rounds[i]);
    }
  }
};
Game.prototype.render = function () {};

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
