/*Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 
che di 5 stampi “FizzBuzz” */

/*BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) 
un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, 
a seconda che il valore inserito sia un numero, 
un fizz, un buzz o un fizzbuzz.*/

/////////////////////////////////////////////////////////////////////////

//creare un'istruzione che consenta di generare numeri da 1 a 100 ciclicamente

const container = document.querySelector(".container");
let element;

for(let i = 1; i <= 100; i++){

    if((i % 3 === 0) && (i % 5 === 0)) {
        element = `<div class="box box-fb">FizzBuzz</div>`; //se è divisibile per 3 e per 5 = FizzBuzz
        container.innerHTML += element;
        
    }else if(i % 3 === 0){
        element = `<div class="box box-f">Fizz</div>`; // se è divisibile per 3 = Fizz
        container.innerHTML += element;

    }else if ((i % 5 === 0)) { // se è divisibile per 5 = Buzz
        element = `<div class="box box-b">Buzz</div>`;
        container.innerHTML += element;

    }else{
        element = `<div class="box box-num">${i}</div>`;
        container.innerHTML += element;
    }

}
