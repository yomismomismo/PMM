// --- ejercicio 5 --- //

let values = [6, 15, 2, 8, 10];


multipleFactorial = (values) => {
    
    let factorial = values.map(function (numero) {
        let factorialTotal = 1

        for (let i = 1; i <= numero; i++) {

            factorialTotal *= i

        }

        return factorialTotal

    })

    return factorial

}

let factorial = multipleFactorial(values)
console.log(factorial);