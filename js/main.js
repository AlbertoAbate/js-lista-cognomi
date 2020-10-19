//  lista array
var lista = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Giorgini"];

// chiedere all'utente il cognome
var cognome = prompt("Inserisci il tuo cognome");

// aggiungere il nuovo cognome alla lista
var nuovaLista = lista.unshift("Abate");
console.log(lista);

// lista ordinata in ordine alfabetico
var ordinamento = lista.sort();
var lunghezzaLista = ordinamento.length;

for (var i = 0; i < lunghezzaLista; i++) {
  console.log(ordinamento[i]);
}

// indexof per cercare nella lista e dare un valore "umano"
var index = lista.indexOf("Duzioni") + 1;
console.log(index);
