// Ejercicio 6:
function personaje() {

// Ejercicio 1:
let n = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
console.log(`Elegiste a ${n}`);

// Ejercicio 2:
let spanTitle = document.querySelector('h1 > span');
let nLower = n.toLowerCase();

switch (nLower) {
    case "mario":
    console.log(spanTitle.textContent = "Mario");
        break;
    case "luigi": 
    console.log(spanTitle.textContent = "Luigi");
        break;
    case "bowser": 
        console.log(spanTitle.textContent = "Bowser Morton Koopa");
        break;
    case "peach": 
        console.log(spanTitle.textContent = "Princesa Peach Toadstool");
        break;
    case "yoshi": 
        console.log(spanTitle.textContent = "T. Yoshisaur Munchakoopas");
        break;
    case "toad": 
        console.log(spanTitle.textContent = "Toad");
        break;
    case "toadette": 
        console.log(spanTitle.textContent = "Toadette");
        break;
    case "daisy": 
        console.log(spanTitle.textContent = "Princesa Daisy");
        break;
    default: 
        console.log(spanTitle.textContent = "(desconocido)");
        break;
}

// Ejercicio 3:
if (nLower === "mario" || "luigi" || "bowser" || "peach" || "yoshi" || "toad" || "toadette" ||  "daisy") {
    console.log(`Id a buscar: ${nLower}`);
    let foundId = document.getElementById(nLower);
    foundId.setAttribute("title", "Presentado");
}

// Ejercicio 4: 
// Corregido!!

// Ejercicio 5: 
// Botón hecho!!

}








