/*Ejercicio 1: Área de un Círculo
Descripción:
Crea un programa que calcule el área de un círculo. Usa una constante para el valor de PI y una variable para el radio del círculo.
const PI: number = 3.141592653589793; let radio: number = 5;
let area: number = PI * radio * radio;
console.log(`El área del círculo con radio ${radio} es ${area}`);
Tarea:
Modifica el valor del radio y observa cómo cambia el resultado.*/

const PI: number = 3.141592653589793; 
let radio: number = 5;
let area: number = PI *radio *radio;

console.log(`El área del círculo con radio ${radio} es ${area}`);

/*Ejercicio 2: Calificación de un Estudiante
Descripción:
Crea un programa que calcule la calificación promedio de un estudiante basado en tres notas. Usa constantes para las notas individuales y una variable para el promedio.
const nota1: number = 85; const nota2: number = 90; const nota3: number = 78;
let promedio: number = (nota1 + nota2 + nota3) / 3; console.log(`El promedio del estudiante es ${promedio}`);
Tarea:
Modifica las notas y verifica cómo cambia el promedio. */

const nota1: number = 85;
const nota2: number = 90;
const nota3: number = 78;
let promedio: number = (nota1 + nota2 + nota3) / 3;
console.log (`El promedio del estudiante es ${promedio}`)

/* Ejercicio 3: Conversión de Temperaturas
Descripción:
Crea un programa que convierta una temperatura de grados Celsius a Fahrenheit. Usa una constante para el valor de conversión y una variable para la temperatura en Celsius.
const conversionFactor: number = 9 / 5; let celsius: number = 25;
let fahrenheit: number = (celsius * conversionFactor) + 32; console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);
Tarea:
Modifica el valor de la temperatura en Celsius y observa cómo cambia la temperatura en Fahrenheit. */

const conversionFactor: number = 9 / 5;
let celsius: number =25;
let fahrenheit: number = (celsius * conversionFactor) + 32;
console.log (`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);