// import Dexie from "./Dexie";

const Dexie = require("./Dexie");

// const db = new Dexie("BaccaratGame");
// db.version(1).stores({
//   Games: "gameID, rounds,",
// });

/**
 * LocalStorage
 */
// let db;
// let request;
// let version = 1;

// request = indexedDB.open("bacarrat", version);
// request.onerror = (event) => {
//         console.log('err = ' + event.target.errorCode);
//     }
// request.onsuccess = (event) => {
//         db = event.target.result;
//     }
// }
// request.onupgradeneeded = (event) => {
//     const db = event.target.result;
//     if(db.objectStoreNames.contains("baccarat")){
//         db.deleteObjectStore("bacarrat");
//     }
//     db.createObjectStore("baccarat", {keyPath: "gameID"});
// };

// let transaction = db.transaction("bacarrat", "readWrite");

// const transaction = db.transaction("bacarrat"),
//     store = transaction.objectStore("bacarrat"),
//     request = store.get(gameId);
//     request.onerror = (event) => { return {results: "error"};};
//     request.onsuccess = (event) => { return {event.target.result};};

/**
 * Dexie
 */
let title = data.gameID;
let rounds = data.rounds;
var db = new Dexie(title);
db.version(data.version).stores({
  games: "gameID, numRounds",
  rounds: "roundNum, winner, score, pairbank, pairplyr, natural",
});

db.transaction("rw", db.games, db.rounds, function* () {
  var gameID = yield db.games.add({
    gameId: data.gameID,
    numRounds: data.numRounds,
  });
  var rounds = yield db.rounds.add({
    roundNum: data.round.num,
    winner: data.round.winner,
    score: data.round.score,
    pairbank: data.round.pairbank,
    pairplyr: data.round.pairplyr,
    natural: data.round.natural,
  });
});
