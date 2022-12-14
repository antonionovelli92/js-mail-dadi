
/* ESERCIZIO 1 - 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
*/

// Elementi dom
const dadi = document.getElementById('dadi')


// Genero numeri randomici per l'utente e per il computer:

const numberUser = Math.floor(Math.random() * 6) + 1;
//! console.log('User ' + numberUser)
const numberCpu = Math.floor(Math.random() * 6) + 1;
//! console.log('Cpu ' + numberCpu)

// Stabilizzo chi dei due è il vincitore
let result = 'tie'
if (numberUser > numberCpu) {
    result = 'user win';
    //! console.log('user win')
} else if (numberCpu > numberUser) {
    result = 'cpu win';
    //! console.log('cpu win')
}

dadi.innerHTML = `
<div> Tiro del giocatore: <img src= "img/${numberUser}.png"> </div>
<div> Tiro del computer: <img src= "img/${numberCpu}.png"> </div>
<h3> ${result} </h3>
`;
console.log(dadi)




/*
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
*/

// lista mail autorizzate
const allowedEmails = [
    'anto.anto@gmail.com',
    'pippo.pluto@hotmail.it',
    'gino.deigiggi@yahoo.it'];

// Recupero gli elementi della dalla pagina;
const emailField = document.getElementById('email');
const button = document.getElementById('button');
const resultE = document.getElementById('result');

//  Agganciamo l'event listner al click del bottone;
button.addEventListener('click', function () {
    //Raccolgo il valore dell'input (la mail);
    const userEmail = emailField.value.trim();

    // Validiamo (soft)
    if (!userEmail) {
        resultE.classList.add('text-danger');
        resultE.innerText = 'Non hai inserito nessuna mail';
        return;
    }

    let isAllowed = false;

    // Controlliamo se la mail è inserita bene;
    for (let i = 0; i < allowedEmails.length && !isAllowed; i++) {
        const currentEmail = allowedEmails[i];
        if (currentEmail === userEmail) {
            isAllowed = true;
        }
    }

    resultE.innerText = isAllowed ? 'Benvenuto' : 'Spiacente, non sei autorizzato';

})

