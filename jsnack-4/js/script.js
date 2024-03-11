// - Calcola la somma e la media dei primi 10 numeri.

// stabilisco quati numeri voglio
const howManyNumbers = 10; 

// creo un'array vuota 
const numbers = [];

// stabilisco le variabili per la somma e la media 
let sum = 0;
let div = 0;
// creo un ciclo per aver i primi 10 numeri nell'arrey
for (let i = 1; i <= howManyNumbers; i++){
    numbers.push(i);
    // ottengo la somma 
    sum += i;
    //ottengo la media 
    div = sum / howManyNumbers
}
// stampo i risultati
console.log(numbers);
console.log(sum);
console.log(div);