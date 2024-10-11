let numero1 = Math.floor(Math.random() * 20 + 1); // Genera un número aleatori entre 1 i 20
let userInput = 0; // Inicialitza la variable d'entrada de l'usuari
let intents = 0; // Inicialitza el comptador d'intents
let millorPunt = Infinity; // Inicialitza la millor puntuació amb un valor molt alt
let sortida = ""; // Inicialitza el missatge de sortida

function playGame() {
    userInput = parseInt(document.getElementById("num").value); // Converteix l'entrada de l'usuari a un número enter

    if (userInput !== numero1) {
        intents++; // Incrementa el comptador d'intents
        if (userInput < numero1) {
            sortida = `El ${userInput} és massa petit, torna a provar.`; // Missatge si és massa petit
            document.getElementById("main").style.backgroundColor = "red"; // Canvia el fons a vermell
        } else {
            sortida = `El ${userInput} és massa gran, torna a provar.`; // Missatge si és massa gran
            document.getElementById("main").style.backgroundColor = "red"; // Canvia el fons a vermell
        }
    } else {
        intents++; // Incrementa el comptador d'intents per l'última jugada
        sortida = `Has endivinat el número ${numero1}!`; // Missatge d'encert
        document.getElementById("display-num").innerHTML = numero1; // Mostra el número correcte
        document.getElementById("main").style.backgroundColor = "green"; // Canvia el fons a verd

        // Comprovar si la puntuació actual és la millor
        if (intents < millorPunt) {
            millorPunt = intents; // Actualitza la millor puntuació
            document.getElementById("display-puntuacio").innerHTML = `🥇 Millor puntuació: ${millorPunt}`; // Mostra la millor puntuació
        }
    }
    
    // Actualitza els elements de la pantalla amb les jugades i el resultat
    document.getElementById("display-jugades").innerHTML = `💯 Jugades: ${intents}`;
    document.getElementById("display-result").innerHTML = `${sortida}`;
    document.getElementById("num").select(); // Selecciona el camp d'entrada per facilitar la nova jugada
}

function resetGame() {
    numero1 = Math.floor(Math.random() * 20 + 1); // Genera un nou número aleatori
    document.getElementById("display-num").innerHTML = "?"; // Reinicia la visualització del número
    document.getElementById("display-result").innerHTML = "Comencem la partida..."; // Mostra un missatge inicial
    intents = 0; // Reseteja el comptador d'intents
    document.getElementById("display-puntuacio").innerHTML = ""; // Neteja la millor puntuació
    document.getElementById("main").style.backgroundColor = ""; // Neteja el fons a l'estil original
}
