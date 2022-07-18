// let nombreIngreso = prompt ("Ingrese su nombre");

// console.log ("Hola "+nombreIngreso)

// let numeroIngresado = prompt ("Elije cualquier numero");

// if (numeroIngresado > 1000) {
//     alert ("El numero es mayor a 1000");
// } else ("El numero es menor a 1000");



// EJEMPLO DE SUMAR IVA

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;

// const iva = x => x * 0.21;

// let precioProducto = 500;
// let precioDescuento = 50;

// let nuevoPrecio = resta( suma(precioProducto, iva(precioProducto)), precioDescuento);

// console.log(nuevoPrecio);






// EJEMPLO DE CONVERTIDOR DE DIVISAS

// let valor = 0;
// let operacion = "";
// let euro = 244;
// let dolar = 200;
// let libra = 264;
// let real = 51;
// let resultado = 0;
// let nuevaOperacion = false;

// function cambiarMoneda(valorMoneda) {
//     let mostrarResultado = valor / valorMoneda
//     return mostrarResultado
// }

// do {
//     valor = prompt("Ingrese el valor expresado en pesos argentinos")
//     operacion = prompt("¿A que moneda desea convertirlo? Dolares (USD), Libras (LIB), Euros (EUR) y Reales (R)")
//     switch (operacion) {
//         case "USD":
//             resultado = cambiarMoneda(dolar)
//             alert("Te quedarán" + " " + resultado + " " + "dolares")
//             break;
//         case "EUR":
//             resultado = cambiarMoneda(euro)
//             alert("Te quedarán" + " " + resultado + " " + "euros")
//             break;
//         case "LIB":
//             resultado = cambiarMoneda(libra)
//             alert("Te quedarán" + " " + resultado + " " + "libras")
//             break;
//         case "R":
//             resultado = cambiarMoneda(real)
//             alert("Te quedarán" + " " + resultado + " " + "reales")
//             break;
//         default:
//             alert("No elegiste la operacion correcta")
//             valor = 0
//             operacion = ""
//             break;
//     }
//     nuevaOperacion = confirm("Quieres realizar otra operacion?")
// } while (nuevaOperacion)





// PRIMER Y SEGUNDA ENTREGA : CICLOS Y FUNCIONES


// let monto = 1000;
// let cuotas = 0;
// let repetir = true;


// function dividirCuotas(monto, cuotas) {
//     let mostrarResultado = monto / cuotas;
//     alert (mostrarResultado);
// }


// do {
//     cuotas = parseInt(prompt( "¿En cuantas cuotas hará el pago, 3, 6, 12?" ))

//     dividirCuotas(monto, cuotas);

//     repetir = confirm("Volver a elegir cuotas?");

// } while (repetir);





// ENTREGA DE ARRAYS

// function Cliente(nombre,pedido){
//     this.nombre=nombre;
//     this.pedido=[];
// }


// const cliente1= new Cliente();

// function Bienvenido(){ 
//     return cliente1.nombre=prompt("Ingrese el usuario");
// }

// console.log(cliente1);

// let VerCatalogo= (nombre) => {return confirm(nombre+ " Deseas validar nuestro catalogo?" );
// }

// function ValidaEdad(){
//     let edad=confirm("Usted es mayor de edad");
//     return edad;
// }

// function Menu(){
//     return Number(prompt("1.- Bebidas alcoholicas\n2.- Bebidas sin alcohol\n 3.- Comida\n 4.- Postre\n 5.- Finalizar seleccion"));
// }

// function BebidasAlcoholicas(){
//     return Number(prompt("1.- Cerveza\n2.- Vino\n 3.- Whisky"));

// }
// function BebidasSinAlcohol(){
//     return Number(prompt("1.- Agua\n2.- Gaseosa\n3.- Bebida energetica"));

// }

// function Comida(){
//     return Number(prompt("1.- Asado\n2.- Asiatica\n 3.- Mexicana"));

// }

// function Postre(){
//     return Number(prompt("1.- Tiramisu\n2.- Cafe\n 3.- Helado"));

// }


// nombre=Bienvenido();
// if(VerCatalogo(nombre)){
//     do{
//             switch(valida=Menu()){
//                 case 1:{
//                     if(ValidaEdad()){
//                         cliente1.pedido.push(BebidasAlcoholicas());
//                         break;
//                     }
//                 }
//                 case 2:{
//                     cliente1.pedido.push(BebidasSinAlcohol());
//                     break;
//                 }
//                 case 3:{
//                     cliente1.pedido.push(Comida());
//                     break;
//                 }
//                 case 4:{
//                     cliente1.pedido.push(Postre());
//                     break;
//                 }
//                 case 5:{
//                     alert("Ha finalizado su eleccion\nGracias!");
//                     break;
//                 }
//                 default:{
//                     alert("La opcion ingresada es incorrecta");
//                     break;
//                 }
//         }
//     }while(valida!=5);

//     //Muestra en la consola las opciones tomadas por el cliente
//     cliente1.pedido.forEach(function(x){
//     console.log(x);
//     });
// }
// else{
//     alert(" Adios, Vuelva pronto!");
// }



let nuevoUsuario = prompt(
     "Bienvenido!\n A continuación ingresa tu nombre de usuario:"
 );
 
 
 // array de USUARIOS
 const USUARIOS = {
         id: 0,
         nombre: nuevoUsuario,
     };
 
 
 // guardo en storage
 const usuarioJSON = JSON.stringify(USUARIOS);
 
 sessionStorage.setItem("Cliente", usuarioJSON);
 
 
 // renderizo en el DOM
 const boton = document.getElementById("boton");
 
 boton.onclick = () => {
     sessionStorage.getItem("Cliente"); // traigo datos del storage
 
     let usuarioDOM = JSON.parse(usuarioJSON);    // transformo de JSON a codigo
 
      const verUsuario = document.getElementById("verUsuario");

      
 
      verUsuario.innerHTML = `
           <p>Tu usuario registrado es ${usuarioDOM["nombre"]}</p>  
           `
      ;
 
 };


















