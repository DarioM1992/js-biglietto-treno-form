
//apro la funzione per calcolo
function costoBiglietto (){

//valori inseriti quali km ed eta
const km = parseFloat(document.getElementById('km').value) ;
const eta = parseInt (document.getElementById('eta').value);



//controllo degli input
if (isNaN (km) || isNaN (eta) || km < 0 || eta < 0) {
    alert("Errore:valori sbagliati");
    return;
}

//costo al km 
const prezzoAlKm = 0.21 ;


//blocco degli sconti e totale
let totale = prezzoAlKm * km;
let sconto = "";

//applico lo sconto
if (eta < 18 ) {
    totale = prezzoAlKm * 0.80;
    sconto = "Sconto minorenni del 20%";
} else if (eta >= 65) {
    totale = prezzoAlKm *0.60;
    sconto = "Sconto over65 del 40%";
} else {
    sconto = "Nessuno sconto";
}
console.log("Calcola Biglietto");
console.log("Km percorsi:" + km);
console.log("Età passegero:" + eta);
console.log(sconto);
console.log("Prezzo al km (0.21€):" + prezzoAlKm.toFixed(2) + "€");

}