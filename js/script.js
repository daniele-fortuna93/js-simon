// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// 1. Riempimento array numeriRandom

var numeriRandom = []; // Array vuoto numeri random
var i = 0; // Variabile contatore while
while ( i < 5) { // Riempio l'array numeriRandom senza doppioni
  numRandom = numeroRandom(1,100);
  if ( !numeriRandom.includes(numRandom) ) {
    numeriRandom.push(numRandom);
    i++;
  }
}

// 2. Mostro i numeriRandom
alert ("Memorizza i numeri: " + numeriRandom); // Mostro i numeri in un alert

// 3. Chiedo all'utente di inserire i numeri

var numeroUtente; // Variabile numero inserito dall'utente
var numeriUtente = []; // Array dei numeri dell'utente da inserire
var j = 0; // Variabile contatore while
var punteggio = 0; // Variabile punteggio

setTimeout( // parte il conto alla rovescisa di tot secondi
  function () {
    while ( j < 5 ) {
      numeroUtente = parseInt(prompt("Inserisci un numero")); // Chiedo all'utente il numero
      if ( !isNaN(numeroUtente) ) { // controllo che sia un numero
        if ( numeroUtente <= 100 && numeroUtente >= 1) { // Controllo che il numero rientri nel range giusto
          if ( !numeriUtente.includes(numeroUtente) ) { // controllo che non sia gia stato inserito
            numeriUtente.push(numeroUtente); // Inserisco nell'array numeriUtente
            j++; // aumento contatore while
            if ( numeriRandom.includes(numeroUtente) ) { // Controllo se il numero è presente nell'array numeriRandom
              punteggio++; // Aggiorno punteggio
            }
          } else {
            alert("Numero già inserito"); // Avviso numero già inserito
          }
        } else {
          alert("Inserisci un numero tra 1 e 100");
        }


      }
    }
    // Stampo tutto
    alert("Hai totalizzato: " + punteggio + " punti. \n"  +
          "I tuo numeri inseriti: " + numeriUtente + "\n" +
          "I numeri da indovinare: " + numeriRandom);
    console.log(punteggio);
    console.log(numeriUtente);
  }, 10000);


// FUNZIONI

function numeroRandom(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}
