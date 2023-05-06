let numero1, numero2, seleccion, resultado;

let nombre =  prompt( "Bienvenida a Banca en Línea \n \n Favor ingrese su nombre");


seleccion = prompt(
  "Seleccione que desea hacer: \n \n 1.- Calcular cual número es mayor \n 2.- Sumar \n 3.- Restar \n 4.- Multiplicar \n 5.- Dividir  \n 6.- Mostrar los números ingresados \n 7.- Salir \n "
);
seleccion = parseInt(seleccion);

numero1 = prompt("Ingrese el primer número");
numero1 = parseInt(numero1);
console.log(numero1);

numero2 = prompt("Ingrese el segundo número");
numero2 = parseInt(numero2);
console.log(numero2);

function calculadora(seleccion, numero1, numero2, resultado) {

    
  switch (seleccion) {
    case 1:
      resultado = numero1 > numero2;
      return resultado;
    case 2:
      resultado = numero1 + numero2;
      return resultado;
    case 3:
      resultado = numero1 - numero2;
      return resultado;
    case 4:
      resultado = numero1 * numero2;
      return resultado;
    case 5:
      resultado = numero1 / numero2;
      return resultado;
    case 6:
      return numero1, numero2;
    case 7:
      alert("gracias por jugar");
  }
}

alert(calculadora(seleccion, numero1, numero2, resultado));
