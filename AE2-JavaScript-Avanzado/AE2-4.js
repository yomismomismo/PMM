// --- ejercicio 3 --- //

let dataArray = [180, 130 , 400, 155, 212, 128, 500, 127];
let numero = 600;

findGreaterThan = (x, values) => {

    let findGreaterThan = values.some((b) => b > x )
    return findGreaterThan;

}

let GreaterThan = findGreaterThan(numero, dataArray)
console.log(GreaterThan);