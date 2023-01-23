// nome
let user_name = prompt('Come ti chiami?')

// cognome
let user_surname = prompt('Quale è il tuo cognome?')

// colore
let color = prompt('quale è il tuo colore preferito?')

// concatenazione
const userpasword = user_name + user_surname + color + "23"

// richiamo all'h1 
document.getElementById('welcome').innerHTML = userpasword


console.log(userpasword)