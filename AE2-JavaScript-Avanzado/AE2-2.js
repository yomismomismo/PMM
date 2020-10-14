// --- ejercicio 2 --- //

let dataArray = [10, 10]

Average = (array) => {

  if (dataArray.length > 0) {

    let filtradoNumeros = array.reduce((numero1, numero2) => numero1 + numero2)
    filtradoNumeros /= dataArray.length
    return filtradoNumeros;

  }

  else {

    return undefined;

  }



}

let media = Average(dataArray)
console.log(media);