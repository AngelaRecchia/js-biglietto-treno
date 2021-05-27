var km = parseFloat(prompt("Quanti km devi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));

var prezzo = km * 0.21;

if (eta < 18) {
    prezzo *= 0.8;
} else if (eta > 65) {
    prezzo *= 0.6;
} 

document.getElementById('text').innerHTML = "Il biglietto costa: " + prezzo.toFixed(2) + "€.";