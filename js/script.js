// // Domande per l'utente
let username = prompt("Inserisci il tuo nome?");
console.log(username);
let userlastname = prompt("Inserisci il tuo cognome?");
console.log(userlastname);
let userfavoritecolor = prompt("Qual'è il tuo colore preferito?");
console.log(userfavoritecolor)

// Calcolo password
const userpassword = username + userlastname + userfavoritecolor + 21;
console.log(userpassword)

// Messaggio con il risultato
const message = `La tua nuova password è ${userpassword}`;
console.log(message);

// Stampo il messaggio
document.getElementById('user-result').innerHTML = message;