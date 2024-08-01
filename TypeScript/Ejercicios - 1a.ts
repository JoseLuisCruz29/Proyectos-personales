/* 1. Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo! */
console.log ("Hola Mundo!");
/* 2. Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.*/
let mensaje: string = ("Hola Mundo");
console.log (mensaje);
/* 3. Escribir un programa que pregunte el nombre del usuario  y después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola !, donde es el nombre que el usuario haya introducido. */
let nombre = prompt('¿Cuál es tu nombre?');
console.log(`¡Hola ${nombre}!`);
/* 4. Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado. */
const pesoPayasoGramos = 112;
const pesoMunecaGramos = 75;
const cantidadPayasos = 5;
const cantidadMunecas = 3;
const pesoTotalGramos = (cantidadPayasos * pesoPayasoGramos) + (cantidadMunecas * pesoMunecaGramos);
console.log(`El peso total del paquete será de ${pesoTotalGramos} gramos.`);
/* 5. Introducir un numero entero de mínimo un digito (1) y máximo 3 (999) y dividir en unidad, decena y centenas, imprimir cuantas unidades tiene, cuantas decenas y cuantas centenas*/
let numero = 456; 
let esValido = numero >= 1 && numero <= 999;
let centenas = esValido && Math.floor(numero / 100);
let residuo = esValido && numero % 100;
let decenas = esValido && Math.floor(residuo / 10);
let unidades = esValido && residuo % 10;
console.log(`El número ${numero} tiene:`);
console.log(`- ${centenas} centena(s)`);
console.log(`- ${decenas} decena(s)`);
console.log(`- ${unidades} unidad(es)`);
/*6. Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde. si la cantidad es mayor a 200 debe pagar las que van de 201 en adelante con un 20% adicional al precio por hora */
const horasTrabajadas = 220; 
const costoPorHora = 10; 
const horasNormales = Math.min(horasTrabajadas, 200);
const horasExtras = Math.max(horasTrabajadas - 200, 0);
const paga = horasNormales * costoPorHora + horasExtras * costoPorHora * 1.2;
console.log(`La paga correspondiente es: ${paga.toFixed(2)} USD`);

