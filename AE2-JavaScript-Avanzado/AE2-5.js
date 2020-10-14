// --- ejercicio 5 --- //

let values = [6, 15, 2, 8, 10];


multipleFactorial = (values) => {
    let factorialArray = []
    values.forEach(element => {
        let factorial = 1;
        for (let i = 1; i <= element; i++) {
            factorial *= i

        }
        factorialArray.push(factorial)

    })
    return factorialArray;

}

let GreaterThan = multipleFactorial(values)
console.log(GreaterThan);