// --- ejercicio 1 --- //

    let Array = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

    // --- A --- // 

        let filtradoTexto = Array.filter(function (numero) {
        return typeof numero == "number";
        });

        console.log(filtradoTexto);

    // --- B --- //

        let filtradoNumeros = Array.filter(function (numero) {
        return numero % 2 == 0;
        }); 

        console.log(filtradoNumeros);