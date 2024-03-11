// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare 
// duplicati (inserire il numero nell'array solo se non è già presente).

// creo un'array vuota 
const howManyNumbers = 5; 
const numbers = [];


// chiedo all'utente 5 numeri utilizzando il ciclo for 
for (let i = 0; i < howManyNumbers; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));

    // controllo se non sono già stati inserirti 
    if (!numbers.includes(userNumber)){
        // inserisco all'interno dell'array
        numbers.push(userNumber);
    }
}

console.log(numbers);



    

    