//Declaracion de Variables
var numero1 = 5;
var numero2 = 8;

//Calculo de Variables
if(numero1 < numero2){
    console.log("Numero1 no es mayor que numero2")
}
if(numero2 > 0){
    console.log("numero1 es un numero positivo")
}
if(numero1 < 0 || numero1 !== 0){
    console.log("numero1 es un numero negativo o distinto de cero")
}
else (console.log("El numero1 es Positivo y distinto de cero"))

function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  // CALCULO:
  var numero = 7; // Cambia este número por el que desees verificar
  var resultado = determinarParOImpar(numero);
  console.log(resultado);

  function esPalindromo(cadena) {
    // Eliminar espacios y convertir todo a minúsculas para hacer la comparación
    cadena = cadena.replace(/\s/g, "").toLowerCase();
  
    // Invertir la cadena
    var cadenaInvertida = cadena.split("").reverse().join("");
  
    // Comparar la cadena original con la cadena invertida
    return cadena === cadenaInvertida;
  }
  
  // Ejemplo de uso:
  var texto = "La ruta nos aporto otro paso natural"; // Cambia este texto por el que desees verificar
  var resultado = esPalindromo(texto);
  
  if (resultado) {
    console.log("La cadena es un palíndromo");
  } else {
    console.log("La cadena no es un palíndromo");
  }
  
  