// - Dato un array contenente 10 numeri, stampare in console il numero più grande.

// stabilisco quati numeri voglio
const howManyNumbers = 10; 
// creo un'array vuota 
const numbers = [];

let bigger = 0;
// chiedo all'utente 10 numeri utilizzando il ciclo for 
for (let i = 0; i < howManyNumbers; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));
    numbers.push(userNumber);
    // stabilisco il più grande
    if (numbers[i] > bigger){
        bigger = numbers[i];
    }
}
// stampo il risultato
console.log(numbers);
console.log(bigger);