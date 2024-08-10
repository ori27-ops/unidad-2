//alert() sirve para mostrar un mensaje en el navegador 

//alert('MENSAJE INICIAL')


//Ejemplo 1 
function mostrarMensaje() {
//alert('Hola desde el navegador')

//Mostramos los numero del 1 al 10 
for (let i = 1; i <= 10; i++){
    //console.log(i)
    alert(i);
}
}

//Ejemplo 2
let texto = "";
for (let i = 1; i <= 10; i++){
    texto += `${i}<br />`;
}

//Asignamos el documento
document.getElementById('demo').innerHTML = texto

//Ejemplo 3
//limpiamos la variable 
texto = "";
const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
/*console.log(autos);
console.log(autos.length);
console.log(autos[autos.length - 1]);*/

//Acceder a los elementos de la lista mediante bucle 
for (let i = 0; i < autos.length; i++) {
    texto += `${autos[i]}<br />`;
}

document.getElementById('autos').innerHTML = texto;

//Ejemplo 4 
//Limpiamos la variable texto
texto = "";

//Recorre una lista por elemento 
for (let auto of autos) {
    texto += `${auto}<br />`;
}

//Asignamos el elemento 
document.getElementById('autos2').innerHTML = texto;
