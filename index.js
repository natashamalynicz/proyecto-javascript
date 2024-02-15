// esta va a ser una tienda online. en este caso, creo un algoritmo para saber si el usuario puede acceder a la pagina web, para eso tiene que cumplir con dos condiciones. estar registrado y ser mayor de esad para poder comprar en nuestra tienda online

let = estaRegistrado = prompt ("¿Estas Registrado? responde con si o no");
let = mayorDeEdad = prompt("¿Eres mayor de edad? responde con si o no");

if (estaRegistrado === "si" && mayorDeEdad === "si"){
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

// segunda entrega: incluimos arrays para controlar nuestros productos
let productos = ["iphone", "samsung", "motorola"]

console.log ("productos disponibles");
for let =0; i < productos.length: i++ {
    console.log((i + 1) + ". " + productos [i]);
}
 //agrego un producto
 productos.push ("xiaomi");

 //elimino un producto
 let indiceSamsung = productos.indexOf ("samsung");
 if (indiceSamsung !== -1) {
    productos.splice (indiceSamsung, 1);
 }

 //voy a utilizar una funcion para agregar otro producto
 function agregarProducto ("alcatel") {
    productos.push ("alcatel");
 }