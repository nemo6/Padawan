
// Site web pour tester le code : https://jsbin.com/?js,console

// à gauche on copie/colle le code, à droite on appuie sur RUN

var blabla = "Coucou tout le monde" // ceci est une variable, elle peut contenir un texte ou un nombre

var bloblo = 15

var capitals = ['Paris', 'Londres', 'Berlin', 'Madrid','Washington','Rome','Pekin','Tokyo','Moscou','Oslo'] // ceci est un tableau, c'est une variable qui contient plusieurs variables

console.log(blabla)

console.log(bloblo)

console.log(capitals)

for (var i = 0; i<=9; i++) {

console.log(i)
	
}

// ceci est un boucle for, c'est très pratique pour voir ou modifier le contenu d'un tableau :

for (var i = 0; i<=9; i++) {

console.log(capitals[i])
	
}

// On peut modifier le tableau :

for (var i = 0; i<=9; i++) {

capitals[i] = capitals[i] + "LOL"

console.log(capitals[i])
	
}

// On peut utiliser aussi d'autre méthodes :

for ( x of capitals ){
console.log(x)
}

for ( x in capitals ){
console.log(capitals[x])
}
	
capitals.forEach( x => {
console.log(x)
})

capitals.map( x => console.log(x) )

/* for (var i = 0; i<=capitals.length-1; i++) {
   
	if (  capitals[i]==='Rome') {
	    
		console.log("Case numéo "+i);
		console.log(" J'ai trouvé Rome dans la case numéro "+i+" !");
	    
	}else{

		console.log("Case numéo "+i);
	  
	}
        
}*/

