// esta va a ser una tienda online. en este caso, creo un algoritmo para saber si el usuario puede acceder a la pagina web, para eso tiene que cumplir con dos condiciones. estar registrado y ser mayor de esad para poder comprar en nuestra tienda online

let = estaRegistrado = prompt ("¿Estas Registrado? responde con si o no");
let = mayorDeEdad = prompt("¿Eres mayor de edad? responde con si o no");

if (estaRegistrado === "si" & mayorDeEdad === "si"){
    console.log("bienvenidos a nuestra tienda online")
}else{
    console.log("No cumples con los requisitos para poder ingresar");
}
    

//ahora, voy a añadir funciones. para ver si una persona es mayor de edad o no.

function corroborarEdad(){
    const EDAD = parseInt (prompt("ingrese su edad"));
    
    if(EDAD >= 18) {
        return "sos mayor a 18 años"
    }else {
        return "no sos mayor de edad"
    }



}

const resultadoEdad = corroborarEdad ();
console.log (resultadoEdad);


//aca voy a incluir ciclo whide para que se muestre un mensaje varias veces:

let i =0;
while ( i < 10) {
    console.log ( "bienvenidos a la tienda");
    i = i + 1;
}

