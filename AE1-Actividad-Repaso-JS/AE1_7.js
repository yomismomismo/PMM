/*---- Ejercicio 7 ----*/


let absUsuario = prompt("Dime un número (Ejercicio7)");

numAbsoluto = (absUsuario) => {


    while (isNaN(absUsuario) || absUsuario == "") {
        absUsuario = prompt("Tienes que poner un número");
    }

    let resAbsoluto = Math.abs(absUsuario);
    return resAbsoluto;

}

let resultadoABS = numAbsoluto(absUsuario);
console.log("El valor absoluto es:" + resultadoABS);

/*----  ----*/