
// Site web pour tester le code : https://jsbin.com/?js,console

// à gauche on copie/colle le code, à droite on appuie sur RUN

var obj = { "Pickachu": "Foudre", "Dracaufeu" : "Feu", "Tortank" : "Eau" }

var obj_nested = 
{  
	"Pokemon":{
		
		"Pickachu":"Foudre",
		"Dracaufeu":"Feu",
		"Tortank":"Eau"
	}
}

console.log(obj["Pickachu"])

console.log( obj_nested["Pokemon"]["Pickachu"] )

console.log( Object.keys(obj) )

console.log( Object.values(obj) )

// tableau avec des objets

var tableau_with_obj = [
{ 'user': 'barney',  'age': 36, 'active': true },
{ 'user': 'fred',    'age': 40, 'active': false },
{ 'user': 'pebbles', 'age': 17, 'active': true }
]

// c'est la même chose que ...

console.log(tableau_with_obj[0].user)
console.log(tableau_with_obj[0].age)
console.log(tableau_with_obj[0].active)

// ça

console.log(tableau_with_obj[0]["age"])
console.log(tableau_with_obj[0]["age"])
console.log(tableau_with_obj[0]["active"])

tableau_with_obj.map( x => console.log(x.age) ) // c'est la même chose que ...

tableau_with_obj.map( x => console.log(x["age"]) ) // ça

/*var capitals = ['Paris', 'Londres', 'Berlin', 'Madrid','Washington','Rome','Pekin','Tokyo','Moscou'];

console.log(capitals);

for (var i = 0; i<=capitals.length-1; i++) {

	if (  capitals[i]==='Rome') {
		
		console.log("j'ai trouvé "+capitals[i]+" dans la case "+i+" ^^");
		
	}else{

		console.log("j'ai pas trouvé dans la case "+i);
	  
	}

}*/


