//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//Consigli del giorno:
//scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//si ma noi cosa vogliamo fare?
//torniamo a scrivere in italiano
//proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


const emailList = [
    "aliarrica@gmail.com",
    "user1@gmail.com",
    "user2@gmail.com",
 
];




let user = prompt("inserisci la tua mail");

 if (emailList.includes('aliarrica@gmail.com') || emailList.includes('user1@gmail.com') || emailList.includes('user2@gmail.com')) {
    console.log("Fai parte della Lista");
 }

 else{
    console.log("Non fai parte della lista");
 }

