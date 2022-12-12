
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
    result = 'user win'
    //! console.log('user win')
} else if (numberCpu > numberUser) {
    result = 'cpu win'
    //! console.log('cpu win')
}

const match = `${numberCpu} + ${numberUser} = ${result}`

// stampo su dom

dadi.innerHTML = match;


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
const emailValid = ['anto.anto@gmail.com', 'pippo.pluto@hotmail.it', 'gino.deigiggi@yahoo.it'];
// console.table(emailValid)

const mailUser = document.getElementById('email');
const button = document.getElementById('btn');

button.addEventListener = ('click', function () {

    // prendo la mail data dall'utente

    for (let i = 0; i < emailValid.length; i++) {
        console.table(emailValid[i]);

        const myMail = mailUser.value;
        console.log(myMail);

        let result = '';
        if (myMail = emailValid[0]) {
            result = 'La registrazione è andata a buon fine';
            console.log(result);

        } else {
            result = 'Riprova con un altro indirizzo';
            console.log(result);

        }
    }

})

// // creo una costante di verifica (array)
// const emailVerify = emailValid[myEamil]
// let result = '';

// if (myMail = emailVerify) {
//     result = "L'email inserita è presente nella lista";
// } else {
//     result = "L'email è sbagliata! Riprova!"
// }
// console.log(emailVerify)