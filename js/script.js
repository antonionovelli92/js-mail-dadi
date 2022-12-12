/* 
Ciao ragazzi,
esercizio di oggi: Gioco dei dadi e Finta Login
Nome repo: js-mail-dadi
Potete svolgere entrambi gli esercizi in un unico file HTML e JS. Se la cosa vi confonde separateli, purché siano sulla stessa repo.
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
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

/* ESERCIZIO 1 - 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
*/

const dadi = document.getElementById('dadi')
// Genero numeri randomici per l'utente e per il computer:
const numberUser = Math.floor(Math.random() * 6) + 1;
console.log('User ' + numberUser)
const numberCpu = Math.floor(Math.random() * 6) + 1;
console.log('Cpu ' + numberCpu)

// Stabilizzo chi dei due è il vincitore
let result = 'tie'
if (numberUser > numberCpu) {
    result = 'user win'
    console.log('user win')
} else if (numberCpu > numberUser) {
    result = 'cpu win'
    console.log('cpu win')
}

const match = `${numberCpu} + ${numberUser} = ${result}`

// stampo su dom

dadi.innerHTML = match;


