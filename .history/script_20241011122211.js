let numero1 = Math.floor(Math.random() * 20 + 1);
let userInput = 0;
let intents = 0;
let sortida = " "

function playGame(){
    userInput = document.getElementById("num").value;

    if (userInput !== numero1){
        sortida = `El ${userInput} no és el número correcte, torna a provar.`;
        intents ++;
    }
    if (userInput == numero1){
        sortida = "Has endivinat el número.";
        document.getElementById("display-num").innerHTML = numero1;
        document.getElementById(main).style.backgroundColor = '#222';
    }
    
    document.getElementById("display-jugades").innerHTML = `💯 Jugades: ${intents}`
    document.getElementById("display-result").innerHTML = `${sortida}`
    document.getElementById("num").select();
}

function resetGame(){
    numero1 = Math.floor(Math.random() * 20 + 1);
    document.getElementById("display-num").innerHTML = "?"
    document.getElementById("display-result").innerHTML = "Comencem la partida..."

}
