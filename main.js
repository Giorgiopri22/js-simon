// Genera 5 numeri casuali tra 1 e 100 e li visualizza
const numeriDaMemorizzare = [];
for (let i = 0; i < 5; i++) {
  const numeroCasuale = Math.floor(Math.random() * 100) + 1;
  numeriDaMemorizzare.push(numeroCasuale);
  document.writeln(numeroCasuale + " ");
}

// Attende 2 secondi prima di cancellare i numeri visualizzati
setTimeout(function() {
  document.body.innerHTML = "";
}, 2000);

// Attende che l'utente inserisca i numeri che ricorda
setTimeout(function() {
  const numeriInseriti = [];
  for (let i = 0; i < 5; i++) {
    const numeroInserito = parseInt(prompt("Inserisci uno dei numeri che hai visto"));
    numeriInseriti.push(numeroInserito);
  }

  // Controlla quanti numeri inseriti corrispondono a quelli visualizzati
  const numeriIndovinati = [];
  for (let i = 0; i < 5; i++) {
    if (numeriDaMemorizzare.includes(numeriInseriti[i])) {
      numeriIndovinati.push(numeriInseriti[i]);
    }
  }

  // Visualizza il numero di numeri indovinati e quali sono
  document.writeln("Hai indovinato " + numeriIndovinati.length + " numeri: ");
  for (let i = 0; i < numeriIndovinati.length; i++) {
    document.writeln(numeriIndovinati[i] + " ");
  }
}, 3000); // Aspetta 3 secondi per dare il tempo di visualizzare i numeri e poi di ricordarli
