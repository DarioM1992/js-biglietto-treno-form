
//apro la funzione per calcolo
function costoBiglietto (){

//blocca il reload della pagina
event.preventDefault();


//valori inseriti quali km ed eta
const km = parseFloat(document.getElementById('km').value) ;
const eta = parseInt (document.getElementById('eta').value);



//controllo degli input
if (isNaN (km) || isNaN (eta) || km <= 0 || eta <= 0) {
    alert("Errore:valori sbagliati");
    return;
}

//costo al km 
const prezzoAlKm = 0.21 ;

//prezzo base senza applicare nulla
const prezzoBase = prezzoAlKm * km;

//blocco degli sconti e totale
let totale = prezzoBase;
let sconto = "";

//applico lo sconto 
//minorenni 20%
//over 65 o compresi 40%
if (eta < 18 ) {
    totale = prezzoBase * 0.80;
    sconto = "Sconto minorenni del 20%";
} else if (eta >= 65) {
    totale = prezzoBase *0.60;
    sconto = "Sconto over65 del 40%";
} else {
    sconto = "Nessuno sconto";
}

// //blocco di console log
// console.log("Calcola Biglietto");
// console.log("Km percorsi:" + km);
// console.log("Età passegero:" + eta);
// console.log(sconto);
// console.log("Prezzo base senza sconto applicato (0.21€):" + prezzoBase.toFixed(2) + "€");
// console.log("Totale:" + totale.toFixed(2) + "€")



//blocco innerHTML al posto dei console.log
document.getElementById('risultato').innerHTML =`
    <p>Km percorsi: ${km}</p>
    <p>Età passeggero: ${eta}</p>
    <p>Sconto applicato: ${sconto}</p>
    <p>Prezzo base senza sconto applicato: ${prezzoBase.toFixed(2)}€</p>
    <p>Totale: ${totale.toFixed(2)}€</p>
  `;
}