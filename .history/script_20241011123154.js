let numero1 = Math.floor(Math.random() * 20 + 1);
let userInput = 0;
let intents = 0;
let millorPunt = Infinity; 
let sortida = "";

function playGame() {
    userInput = parseInt(document.getElementById("num").value); // Convertir a número entero

    if (userInput !== numero1) {
        intents++;
        if (userInput < numero1) {
            sortida = `El ${userInput} és massa petit, torna a provar.`;
        } else {
            sortida = `El ${userInput} és massa gran, torna a provar.`;
        }
    } else {
        intents++; // Incrementa intents al adivinar correctamente
        sortida = `Has endivinat el número ${numero1}!`;
        document.getElementById("display-num").innerHTML = numero1;

        // Comprobar si la puntuación actual es la mejor
        if (intents < millorPunt) {
            millorPunt = intents; 
            document.getElementById("display-puntuacio").innerHTML = `🥇 Millor puntuació: ${millorPunt}`;
        }
    }
    
    document.getElementById("display-jugades").innerHTML = `💯 Jugades: ${intents}`;
    document.getElementById("display-result").innerHTML = `${sortida}`;
    document.getElementById("num").select();
}

function resetGame() {
    numero1 = Math.floor(Math.random() * 20 + 1);
    document.getElementById("display-num").innerHTML = "?";
    document.getElementById("display-result").innerHTML = "Comencem la partida...";
    intents = 0; // Resetea los intentos
    document.getElementById("display-puntuacio").innerHTML = ""; // Limpia la mejor puntuación
}
