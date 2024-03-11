// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// stabilisco quati numeri voglio
const howManyNumbers = 6; 
// creo un'array vuota 
const numbers = [];

// chiedo all'utente 6 numeri utilizzando il ciclo for 
for (let i = 0; i < howManyNumbers; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));

    // controllo se è pari e non lo inserisco 
    if (userNumber % 2 === 0 ){
        numbers.push();
    } else {
        // se è dispari lo inserisco all'interno dell'array
        numbers.push(userNumber);
    }


}
// stampo il risultato
console.log(numbers);