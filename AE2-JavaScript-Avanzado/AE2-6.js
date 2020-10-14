// --- ejercicio 6--- //

let users = ["José Luis", "Ramon", "José Manuel", "José", "Paco Pepe", "Alberto", "Adrian"];
let blackListed = ["Ramon", "José Manuel", "José Luis"];


blackListedFunction = (users, blackListed) => {

    let Aceptados = users.filter(user=> 
        !blackListed.includes(user)  
        );
        return Aceptados;
}

let usuariosAceptados = blackListedFunction(users, blackListed)
console.log(usuariosAceptados);