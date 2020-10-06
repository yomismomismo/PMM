/*---- Ejercicio 6 ----*/

let numUsuario = prompt("Dime un número (Ejercicio6)");
let tipo = ""
parImpar = (numUsuario) => {


    while (isNaN(numUsuario) || numUsuario == "") {
        numUsuario = prompt("Tienes que poner un número");
    }
    let tipo = (numUsuario % 2) ? "Impar" : "Par";
    if (numUsuario % 2 == 0) {
        tipo = "par";
    }
    else {
        tipo = "impar";
    }

    return tipo

}
let resultadoParImpar = parImpar(numUsuario);

console.log(numUsuario + " es un número " + resultadoParImpar);

/*----  ----*/