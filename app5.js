
// Site web pour tester le code : https://jsbin.com/?js,console

// à gauche on copie/colle le code, à droite on appuie sur RUN

var sentence = "Bonjour tout le monde"

var texte = `Lorem ipsum dolor sit amet, conse
Nulla perferendis magnam veritatis suscipit vo
Tempore, illum, dignissimos culpa explicabo qu
consequuntur pariatur quibusdam ea aut dolorem
Quae nihil velit, accusantium, minima quos ver
ullam aliquid consequatur. Nulla quasi molesti
praesentium debitis ex sapiente rem, quis labo
Nostrum ipsum illo eligendi fugiat porro velit 
expedita nihil alias quia obcaecati aspernatur
soluta reiciendis, totam, quis minus consectet`

var capture = texte.match(/[a-zA-Z]+/g)

console.log(capture)

var upper = texte.replace(/[a-zA-Z]+/g, function (x) {
  return x.toUpperCase();
})

// console.log(upper)

var numberify = texte.replace(/[a-zA-Z]+/g, function (x) {
  
  text = ""
  rand = Math.floor( Math.random() * 2 )
  
  if ( rand == 1 ){
    
	  for (var i = 0; i < x.length; i++){
	  text += Math.floor( Math.random() * 10 )
	  }
    
      return text
    
  }else{
    
    return x
  }
  
})

console.log(numberify)

year = "Bonjour, nous sommes en 2019"

var millenium = texte.replace(/[0-9]+/g, function (x) {
  
  x = parseInt(x) + 1000
  
  return x
  
})

console.log(millenium) // Bonjour, nous sommes en 3019

/*function makeid() {
	
  var text = ""
  var possible = "abcdefghijklmnopqrstuvwxyz"

  for (var i = 0; i < 12; i++)
  text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
	  
}

var rand = Math.floor( Math.random() * 10 )*/
