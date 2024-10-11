let numero1;
let userInput = 0;
let intents = 0;
let millorPunt = Infinity;

function setRange() {
    const max = parseInt(document.getElementById("max").value);
    if (max <= 1) {
        alert("El valor màxim ha de ser major que 1."); // marquem que no podem posa de màxim 0 ni negatius
        return;
    }
    numero1 = Math.floor(Math.random() * max) + 1;
    intents = 0;
    document.getElementById("display-num").innerHTML = "?";
    document.getElementById("display-result").innerHTML = "Comencem la partida...";
    document.getElementById("main").style.backgroundColor = "";
    document.getElementById("display-jugades").innerHTML = `💯 Intents: 0`;
    document.getElementById("display-puntuacio").innerHTML = ""; 
}

function playGame() { //funció per jugar 
    if (!numero1) { 
        alert("Si us plau, posa el rang abans de jugar!"); // aquí fem un alert que avisa de que s'ha de especifivar el rang amb el que volem jugar
        return;
    }

    userInput = parseInt(document.getElementById("num").value);
    if (userInput !== numero1) {
        intents++; // cada cop que fallem incrementa el num d'intents
        if (userInput < numero1) {
            sortida = `El ${userInput} és massa petit, torna a provar.`;
            document.getElementById("main").style.backgroundColor = "red";
        } else {                                                             // aquí fem que depenend de si és més gran o més petit et mostri un missatge o un altre i amb els colors igual
            sortida = `El ${userInput} és massa gran, torna a provar.`;
            document.getElementById("main").style.backgroundColor = "red";
        }
    } else {
        intents++;
        sortida = `Has endivinat el número!`;
        document.getElementById("display-num").innerHTML = numero1;
        document.getElementById("main").style.backgroundColor = "green"; // s'hi hem endivinat el numero ens mostra per pantalla i apareix un fons verd
        if (intents < millorPunt) {
            millorPunt = intents;
            document.getElementById("display-puntuacio").innerHTML = `🥇 Millor puntuació: ${millorPunt}`; // la millor puntuacio sempre serà si els intents és menor a la millor puntuació anterior
        }
    }
    document.getElementById("display-jugades").innerHTML = `💯 Intents: ${intents}`; // mo0strem els intents que portem
    document.getElementById("display-result").innerHTML = `${sortida}`;
    document.getElementById("num").select();
}

function resetGame() {
    document.getElementById("display-num").innerHTML = "?";
    document.getElementById("display-result").innerHTML = "Comencem la partida...";
    intents = 0; 
    document.getElementById("display-jugades").innerHTML = "💯 Intents: 0"; // deixem els intents a 0 de nou però la millor puntuació es guarda
    document.getElementById("main").style.backgroundColor = "";
}
