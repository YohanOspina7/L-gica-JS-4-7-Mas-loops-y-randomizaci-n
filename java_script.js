let numero_aleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);

console.log("Bienvenido al juego de adivina el numero");
console.log("Adivina el numero que se encuentra entre 0 y 10");
console.log("Deberas acertar en 3 intentos")
console.log("---------------------------------------------------");
let numero_intentos = 3;

while (numero_intentos > 0) {
    
    console.log("¿Cual crees que sea el numero?");
    let numero_usuario = prompt();
    console.log("---------------------------------------------------");
    
    if (numero_usuario == numero_aleatorio) {
        console.log("Haz adivinado el numero, ¡FELICIDADES!");
        console.log(`El numero era ${numero_aleatorio}`)
        break;
        
    } else if (numero_usuario != numero_aleatorio) {
        console.log("Mala suerte, vuelte a intentar")
        numero_intentos = numero_intentos - 1;
        
        if (numero_intentos > 2) {
        console.log(`Te quedan ${numero_intentos} intentos`)
        
        } else {
            console.log(`Te queda ${numero_intentos} intento`)
        }
    }
}
if (numero_intentos < 1) {
    console.log("Se te han acabado el numero de intentos")
    console.log("Deberas continuar desde un princpio")
    console.log(`El numero era ${numero_aleatorio}`)
    console.log("---------------------------------------------------");
}
