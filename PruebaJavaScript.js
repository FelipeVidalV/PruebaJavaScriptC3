/*Ejercicio 1: Función que define si aplica descuento de 20% 
y arroja total de la compra*/

//lo que quise hacer//
var precios = [500,800,5000,10000]//establecer variables//
var dias = ["martes","jueves"] //definir días que queria ingresar//
function descuento20 (dias){
    if (dias == "martes" || dias == "jueves"){ //crear condicion que si se cumplia//
        return (precios * 0.8); //aplicara descuento//
    }
    
    else {
        return (precios);
    }
    console.log 
}

console.log(descuento20(dias));

/*Ejercicio 2: Función que define si aplica un descuento
de 5% cumpliéndose condiciones*/

//lo que quise hacer//
var costo = [500,400,900] // estableceer variable de costos
function descuento5 (cantidad){
    if (cantidad>3 && valor > 10000){ //decirle que viera si la cantidad era mayor a 3 y costaba más de 10000//
        return (costo * 0.95); //de cumplirse me aplicara descuento//
    }else{
        return (costo); //de no cumplirse dejara el precio sin alterar//
    }

}
 console.log(descuento20(5))


/*Ejercicio 3: Función que define si existen números
negativos y de ser el caso notifica error*/

function ErrorNegativos (precio){ //creo la función y defino que se ingresará un precio//
    if (precio >= 0){ //creo condición "if" que establezca si el precio ingresado es igual o mayor a 0//
        return "valores correctos"; //si se cumple la condición me entrega un mensaje positivo//

    }else {
        return "error, números negativos"; //creo un "else" para que de caso contrario (sea un valor negativo) me arroje un mensaje de error//
    }
   
}
console.log (ErrorNegativos(-862));

/*Ejercicio 4.1: Función que retorna el valor
del producto más costoso*/

var grande = [200,5500,900,7000,500,300]; //defino lista de precios//
var max = grande [0]; // creo la variante con el índice "0"//
     for (i=1;i<grande.length;i++){ //creo un "for" que recorra todas las posiciones//
        if (grande[i]>max){ //creo condición que descubra si el índice actual es mayor que el anterior//
            (max=grande[i]) //si se cumple condición defino que el valoro encontrado sea el nuevo "max"//

        }
         
     }
  
    console.log (max) //indico que me muestre el "max" final que será el mayor valor//






/*Ejercicio 4.2: Función que retorna el valor
del producto menos costoso*/

var pequeno = [200,5500,900,7000,500,300]; //defino lista de precios//
var min = pequeno [0]; // creo la variante con el índice "0"//
     for (i=1;i<pequeno.length;i++){ //creo un "for" que recorra todas las posiciones//
        if (pequeno[i]<min){ //creo condición que descubra si el índice actual es menor que el anterior//
            (min=pequeno[i]) //si se cumple condición defino que el valoro encontrado sea el nuevo "min"//

        }
         
     }

    console.log (min) //indico que me muestre el "min" final que será el menor valor//
