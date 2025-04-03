let titulo = document.getElementById("titulo");
console.log(titulo.textContent);

///////////////////////////////////////////////////////

let futebol = document.getElementsByClassName("fut");
console.log(futebol[0].textContent);

let basquete = document.getElementsByClassName("bas");
console.log(basquete[0].textContent);

let volei = document.getElementsByClassName("vol");
console.log(volei[0].textContent);

let tenis = document.getElementsByClassName("ten");
console.log(tenis[0].textContent);

let hipismo = document.getElementsByClassName("hip");
console.log(hipismo[0].textContent);

let esgrima = document.getElementsByClassName("esg");
console.log(esgrima[0].textContent);

let hoquei = document.getElementsByClassName("hoq");
console.log(hoquei[0].textContent);

let handebol = document.getElementsByClassName("han");
console.log(handebol[0].textContent);

let natacao = document.getElementsByClassName("nat");
console.log(natacao[0].textContent);

let ginastica = document.getElementsByClassName("gin");
console.log(ginastica[0].textContent);

///////////////////////////////////////////////////////////

let lista = document.getElementsByTagName("li");
console.log(lista);

///////////////////////////////////////////////////////////

let tituloQS = document.querySelector("#titulo");
console.log(lista);

/////////////////////////////////////////////////////////////

let listaQS = document.querySelector(".fut");
let listaQS1 = document.querySelector(".bas");
let listaQS2 = document.querySelector(".vol");
let listaQS3 = document.querySelector(".ten");
let listaQS4 = document.querySelector(".hip");
let listaQS5 = document.querySelector(".esg");
let listaQS6 = document.querySelector(".hoq");
let listaQS7 = document.querySelector(".han");
let listaQS8 = document.querySelector(".nat");
let listaQS9 = document.querySelector(".gin");


console.log("Exibindo com Query Selector" + tituloQS.textContent);
console.log("Exibindo com QS a lista" + listaQS.textContent);
console.log("Exibindo com QS a lista" + listaQS1.textContent);
console.log("Exibindo com QS a lista" + listaQS2.textContent);
console.log("Exibindo com QS a lista" + listaQS3.textContent);
console.log("Exibindo com QS a lista" + listaQS4.textContent);
console.log("Exibindo com QS a lista" + listaQS5.textContent);
console.log("Exibindo com QS a lista" + listaQS6.textContent);
console.log("Exibindo com QS a lista" + listaQS7.textContent);
console.log("Exibindo com QS a lista" + listaQS8.textContent);
console.log("Exibindo com QS a lista" + listaQS9.textContent);

//////////////////////////////////////////////////////////////////////////

titulo.innerHTML ="<span style='color:blue'> Meus Esportes Favoritos </span>"

// Criando um novo elemento
let novoli = document.createElement("li");
novoli.innerText = "Taekwondo";


let novoli2 = document.createElement("li");
novoli2.innerText = "Ballet";

// Adicionando o novo parágrafo ao body com appendChild
document.body.appendChild(novoli);

document.body.appendChild(novoli2);