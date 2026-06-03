
//apro la funzione per calcolo
function costoBiglietto (){

//valori inseriti quali km ed eta
const km = parseFloat(document.getElementById('km').value) ;
const eta = parseInt (document.getElementById('eta').value);

//costo al km 
const prezzoAlKm = 0.21 ;

//controllo degli input
if (isNaN (km)) || isNaN (eta) || km < 0 || eta < 0 ) {
    alert("Errore:valori sbagliati");
    return;
}

//blocco degli sconti
let sconto = 0;

//applico lo sconto
if (eta < 18 ) {
    sconto = 0.20;
    
}