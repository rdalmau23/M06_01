let numero1;
let userInput = 0;
let intents = 0;
let millorPunt = Infinity;

function setRange() {
    const max = parseInt(document.getElementById("max").value);
    if (max <= 1) {
        alert("El valor màxim ha de ser major que 1.");
        return;
    }
    numero1 = Math.floor(Math.random() * max) + 1;
    intents = 0;
    document.getElementById("display-num").innerHTML = "?";
    document.getElementById("display-result").innerHTML = "Comencem la partida...";
    document.getElementById("main").style.backgroundColor = "";
    document.getElementById("display-jugades").innerHTML = `💯 Jugades: 0`;
    document.getElementById("display-puntuacio").innerHTML = ""; 
}

function playGame() {
    if (!numero1) { 
        alert("Si us plau, establix el rang abans de jugar!");
        return;
    }

    userInput = parseInt(document.getElementById("num").value);
    if (userInput !== numero1) {
        intents++;
        if (userInput < numero1) {
            sortida = `El ${userInput} és massa petit, torna a provar.`;
            document.getElementById("main").style.backgroundColor = "red";
        } else {
            sortida = `El ${userInput} és massa gran, torna a provar.`;
            document.getElementById("main").style.backgroundColor = "red";
        }
    } else {
        intents++;
        sortida = `Has endivinat el número!`;
        document.getElementById("display-num").innerHTML = numero1;
        document.getElementById("main").style.backgroundColor = "green";
        if (intents < millorPunt) {
            millorPunt = intents;
            document.getElementById("display-puntuacio").innerHTML = `🥇 Millor puntuació: ${millorPunt}`;
        }
    }
    document.getElementById("display-jugades").innerHTML = `💯 Intents: ${intents}`;
    document.getElementById("display-result").innerHTML = `${sortida}`;
    document.getElementById("num").select();
}

function resetGame() {
    document.getElementById("display-num").innerHTML = "?";
    document.getElementById("display-result").innerHTML = "Comencem la partida...";
    intents = 0; 
    document.getElementById("display-jugades").innerHTML = "💯 Intents:";
    document.getElementById("main").style.backgroundColor = "";
}
