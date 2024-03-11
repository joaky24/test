// Your Solution code goes here

// Iteration 1: Basic Input / Output & Conditionals

var driver = window.prompt("Cuál es el nombre del driver?")
var piloto = window.prompt("Cuál es el nombre del piloto?")


console.log("El nombre del driver es " + driver)
console.log("El nombre del piloto es " + piloto)


if(driver.length>piloto.length) {
   console.log("The Driver has the longest name. it has " + (driver.length) + "caracteres." )
} else if (piloto.length>driver.length) {
    console.log("Yo, Pilot got the longest name, it has " + (piloto.length) + " characters")
} else if (piloto.length == driver.length) {
   console.log( "Wow, you both got equally long names, " + (piloto.length) + " characters!")
}



// Iteration 2: String Loops.

var espacio = ""
var guion = ""
var reversa = ""

for (var i=0; i < driver.length; i++) {
     
    espacio = espacio.concat(driver[i]," ")
}
console.log(espacio);

for (var i = 0; i < driver.length; i++) {

    guion = guion.concat(driver[i], "-"); 
    
}
 guion = guion.slice (0, guion.length-1)
 guion = guion.concat ("!")
console.log(guion);

for (var i = piloto.length -1; i >= 0 ; i--) {

    reversa = reversa.concat(piloto[i], " ")
}
console.log(reversa.toUpperCase(reversa));




// Iteration 3: Number Conditionals & Loops

for (var i = 1; i <= 20; i++) {
    console.log(i)
}

for (var i = 0; i <= 128; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 1) {
        console.log(i)
    }
}

for (var i= 1; i <= 10; i++) {
    console.log ("2^"+ i + "=" + Math.pow (2,i))
}




// Iteration 4: Bounes Time!

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra. Blandit libero volutpat sed cras ornare arcu dui. Risus viverra adipiscing at in tellus integer. Risus at ultrices mi tempus imperdiet nulla. Proin fermentum leo vel orci. Porttitor lacus luctus accumsan tortor. Amet massa vitae tortor condimentum. Tortor vitae purus faucibus ornare. Varius sit amet mattis vulputate enim nulla. Sed enim ut sem viverra aliquet eget sit amet. Consectetur libero id faucibus nisl tincidunt eget nullam.\
Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Amet tellus cras adipiscing enim eu turpis. Euismod in pellentesque massa placerat duis ultricies. Sagittis vitae et leo duis.Auctor eu augue ut lectus arcu bibendum at.Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Adipiscing elit ut aliquam purus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Euismod lacinia at quis risus.Risus commodo viverra maecenas accumsan lacus vel facilisis. Amet nulla facilisi morbi tempus iaculis urna. Ac turpis egestas sed tempus urna et pharetra pharetra. Erat velit scelerisque in dictum non consectetur a. Laoreet suspendisse interdum consectetur libero. Arcu risus quis varius quam quisque id.\
Ultricies mi quis hendrerit dolor magna eget.Varius vel pharetra vel turpis nunc eget lorem dolor sed. Sit amet consectetur adipiscing elit ut aliquam purus. Sapien faucibus et molestie ac feugiat sed lectus. Urna nec tincidunt praesent semper feugiat.Euismod elementum nisi quis eleifend quam adipiscing vitae. Facilisi etiam dignissim diam quis enim lobortis. Egestas congue quisque egestas diam in arcu. Dignissim suspendisse in est ante in nibh mauris cursus. Sed felis eget velit aliquet sagittis id consectetur purus ut.Bibendum est ultricies integer quis auctor elit sed vulputate. Cursus risus at ultrices mi tempus. Leo duis ut diam quam nulla porttitor. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.'
var palabras = lorem.split (" ")
var contador = 0


console.log (palabras.length)

for (var i=0; i < palabras.length; i++){
    if (palabras[i] == "et"){
        contador++
    } 
}
console.log (contador)   


