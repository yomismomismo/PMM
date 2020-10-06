/*---- Ejercicio 8 ----*/
let num = prompt("Dime un número del 1 al 12 (Ejercicio8)");

numAleatorio = (num) => {

    while (isNaN(num) || num == "" && num <= 0 || num > 12) {

        if (num <= 0 || num > 12) {
            num = prompt("Tienes que poner un número del 1 al 12");
        }

        else {
            num = prompt("Tienes que poner un número");
        }

    }

    let numeroAleatorio = Math.floor(Math.random() * (1, 12) + 1)

    if (num == numeroAleatorio) {
        alert("Has acertado el número");
    }

    else {
        alert("Has fallado, era el numero: " + numeroAleatorio)
    }
    let volveraJugar = prompt("Quieres volver a jugar (Si - No)");
    console.log(volveraJugar);

    while (volveraJugar != "Si" && volveraJugar != "No") {
        volveraJugar = prompt("Quieres volver a jugar (Si - No)");
    }

    if (volveraJugar == "Si") {
        num = prompt("Dime un número del 1 al 12 (Ejercicio8)");
        numAleatorio(num);
    }

    if (volveraJugar == "No") {
        alert("Adios");
    }
}
numAleatorio(num);