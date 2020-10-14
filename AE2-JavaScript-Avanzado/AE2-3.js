// --- ejercicio 3 --- //

let dataArray = [180, 130 , 400, 155, 212, 128, 500, 127]

findMinimum = (array) => {


    let numeroMin = array.reduce((numero1, numero2) => Math.min(numero1, numero2) )

    return numeroMin;

}

let media = findMinimum(dataArray)
console.log(media);