var km = parseFloat(prompt("Quanti km devi percorrere?"));
var eta = parseInt(prompt("Quanti anni hai?"));

var prezzo = km * 0.21;
var minorenne = eta < 18;
var over65 = eta >= 65;

if (minorenne || over65) {
    document.getElementById('text').innerHTML = "Hai diritto ad uno sconto del ";

    if (minorenne) {
        prezzo *= 0.8;
        document.getElementById('text').innerHTML += "20% </br>";

    } else if (over65) {
        prezzo *= 0.6;
        document.getElementById('text').innerHTML += "40% </br>";
    } 

}

document.getElementById('text').innerHTML += "Il biglietto costa: " + prezzo.toFixed(2) + "€";
