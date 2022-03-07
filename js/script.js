var klikkeknappEl = document.getElementById("klikkeknapp");
var utsriftEl = document.getElementById("utskrift");
var oppgadering1El = document.getElementById("oppgradering1")
var oppgadering2El = document.getElementById("oppgradering2")
var oppgadering3El = document.getElementById("oppgradering3")


klikkeknappEl.addEventListener("click", beregnKlikk)
oppgadering1El.addEventListener("click", oekPoengPerKlikkmed1)
oppgadering2El.addEventListener("click", oekPoengPerKlikkmed10)
oppgadering2El.addEventListener("click", oekPoengPerKlikkmed100)

var antalKlikk = 0;
var poengPerKlikk = 1;

function beregnKlikk(e) {
    antalKlikk = antalKlikk + poengPerKlikk;
    utsriftEl.innerHTML = "Du har klikket " + antalKlikk + " ganger.";
}

function oekPoengPerKlikkmed1(e) {
    if(antalKlikk > 99){
        poengPerKlikk = poengPerKlikk + 1; 
        antalKlikk = antalKlikk - 100;
        klikkeknappEl.innerHTML = "+" + poengPerKlikk;
        utsriftEl.innerHTML = "Du har kjøpt en oppgradering og har nå " + antalKlikk + " poeng igjen.";
    } else {
        alert("Du har ikke nokk penger")
    }
}
function oekPoengPerKlikkmed10(e) {
    if(antalKlikk > 999){
        poengPerKlikk = poengPerKlikk + 10; 
        antalKlikk = antalKlikk - 1000;
        klikkeknappEl.innerHTML = "+" + poengPerKlikk;
        utsriftEl.innerHTML = "Du har kjøpt en oppgradering og har nå " + antalKlikk + " poeng igjen.";
    } else {
        alert("Du har ikke nokk penger")
    }
}
function oekPoengPerKlikkmed100(e) {
    if(antalKlikk > 9999){
        poengPerKlikk = poengPerKlikk + 100; 
        antalKlikk = antalKlikk - 10000;
        klikkeknappEl.innerHTML = "+" + poengPerKlikk;
        utsriftEl.innerHTML = "Du har kjøpt en oppgradering og har nå " + antalKlikk + " poeng igjen.";
    } else {
        alert("Du har ikke nokk penger")
    }
}