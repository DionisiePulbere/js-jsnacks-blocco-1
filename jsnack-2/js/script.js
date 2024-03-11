// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.

// stabilisco quati numeri voglio
const howManyNumbers = 5; 
// creo un'array vuota 
const numbers = [];

// dichiaro la variabile somma 
let sum = 0;
// chiedo all'utente 5 numeri utilizzando il ciclo for 
for (let i = 0; i < howManyNumbers; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));
    // sommo i numeri che mi sono stati dati
    sum += userNumber;
}
// stampo il risultato
alert( "La somma dei numeri forniti è " + sum);