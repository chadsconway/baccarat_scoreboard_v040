function HandleSerialize(gameobj) {
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
}
function HandleDeserialize(storedString) {
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
}
