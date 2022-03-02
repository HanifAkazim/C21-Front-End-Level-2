let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  __om duidelijk te maken dat het over een tekt gaat___ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype __integer___ waarom? __om duidelijk te maken dat het om getsllen gaat__ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? __in javascript moet je declareren eerst___ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P___onclick________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ___pointing device______ de waarde noemen we een Any_______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __melding_____ op het scherm met de tekst __je naam___ deze tekst staan op regel ___17____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ___nee________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ____foto wordt verstopt______ en waar wordt deze in je HTML aangeroepen? ____23____ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___25_____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? __Returns a reference to the first object with the specified value of the ID attribute__ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___als je er op klikt komt er een foto tevoorschijn____ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____32_________ en wanneer wordt deze aangeroepen __als je erop klikt___ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ___integer_____ en waar komt de waarde van getal vandaan? _____3_______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _____Returns the first element that is a descendant of node that matches selectors__  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __komt plus 3 bij______ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ___dan wordt het ipv plus min het getal wat jij kiest___ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____44___ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ___setColor___ en waar komt de waarde van kleur vandaan? __styleColor__ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ____style.fontsize___ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ___kleur en grootte van text wordt aangepast____ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven __je geeft aan dat het om een text gaat____ en wanneer gebeurt dat ___als je op de button klikt_______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ____niks_______________ vul je antwoord in op de lijn.