const form = document.querySelector("form");
const inputNameP1 = document.getElementById("player1");
let nameP1 = "";
const inputNameP2 = document.getElementById("player2");
let nameP2 = "";
const inputNameP3 = document.getElementById("player3");
let nameP3 = "";
const inputNameP4 = document.getElementById("player4");
let nameP4 = "";

// const inputFieldsScoreP1 = document.getElementById("fieldsScoreP1");
let fieldsP1Value = 0;
// const inputFieldsScoreP2 = document.getElementById("fieldsScoreP2");
// let fieldsP2Value = 0;
// const inputFieldsScoreP3 = document.getElementById("fieldsScoreP3");
// let fieldsP3Value = 0;
// const inputFieldsScoreP4 = document.getElementById("fieldsScoreP4");
// let fieldsP4Value = 0;

// const inputForestScoreP1 = document.getElementById("forestScoreP1");
let forestP1Value = 0;
// const inputForestScoreP2 = document.getElementById("forestScoreP2");
// let forestP2Value = 0;
// const inputForestScoreP3 = document.getElementById("forestScoreP3");
// let forestP3Value = 0;
// const inputForestScoreP4 = document.getElementById("forestScoreP4");
// let forestP4Value = 0;

// const inputLakeP1 = document.getElementById("lakeScoreP1");
let lakeP1Value = 0;
// const inputLakeP2 = document.getElementById("lakeScoreP2");
// let lakeP2Value = 0;
// const inputLakeP3 = document.getElementById("lakeScoreP3");
// let lakeP3Value = 0;
// const inputLakeP4 = document.getElementById("lakeScoreP4");
// let lakeP4Value = 0;

// const inputMeadowP1 = document.getElementById("meadowScoreP1");
let meadowP1Value = 0;
// const inputMeadowP2 = document.getElementById("meadowScoreP2");
// let meadowP2Value = 0;
// const inputMeadowP3 = document.getElementById("meadowScoreP3");
// let meadowP3Value = 0;
// const inputMeadowP4 = document.getElementById("meadowScoreP4");
// let meadowP4Value = 0;

// const inputDesertP1 = document.getElementById("desertScoreP1");
let desertP1Value = 0;
// const inputDesertP2 = document.getElementById("desertScoreP2");
// let desertP2Value = 0;
// const inputDesertP3 = document.getElementById("desertScoreP3");
// let desertP3Value = 0;
// const inputDesertP4 = document.getElementById("desertScoreP4");
// let desertP4Value = 0;

// const inputMineP1 = document.getElementById("mineScoreP1");
let mineP1Value = 0;
// const inputMineP2 = document.getElementById("mineScoreP2");
// let mineP2Value = 0;
// const inputMineP3 = document.getElementById("mineScoreP3");
// let mineP3Value = 0;
// const inputMineP4 = document.getElementById("mineScoreP4");
// let mineP4Value = 0;

let totalP1 = document.getElementById("totalP1");



inputNameP1.addEventListener("input", (e) => {
  nameP1 = e.target.value;
  console.log(nameP1);
});

fieldsScoreP1.addEventListener("input", (e) => {
  fieldsP1Value = e.target.value;
  
  console.log(fieldsP1Value);
  console.log(typeof fieldsP1Value);
});
forestScoreP1.addEventListener("input", (e) => {
    forestP1Value = e.target.value;
});
lakeScoreP1.addEventListener("input", (e) => {
    lakeP1Value = e.target.value;
});
meadowScoreP1.addEventListener("input", (e) => {
    meadowP1Value = e.target.value;
});
desertScoreP1.addEventListener("input", (e) => {
    desertP1Value = e.target.value;
});
mineScoreP1.addEventListener("input", (e) => {
    mineP1Value = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nbFieldsScorP1 = parseInt(fieldsP1Value);
  let nbForestScorP1 = parseInt(forestP1Value);
  let nbLakeScorP1 = parseInt(lakeP1Value);
  let nbMeadowScorP1 = parseInt(meadowP1Value);
  let nbDesertScorP1 = parseInt(desertP1Value);
  let nbMineoScorP1 = parseInt(mineP1Value);
  
  totalP1 = nbFieldsScorP1 + nbForestScorP1 + nbLakeScorP1 + nbMeadowScorP1 + nbDesertScorP1 + nbMineoScorP1;
  document.querySelector(".total-player1").innerHTML = `
  <h4>Le score est de: ${totalP1}
  `;
});
