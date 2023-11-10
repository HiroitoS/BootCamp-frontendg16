console.log('Hello world')
//esto es un comentario en una sola línea
/*
esto es 
un 
comentario
en varias
lineas
 */

//TIPOS DE DATOS
//PRIMITIVOS:number, String, Boolean(true, false), undefined


//NUMBER
const numero1=20
const numero2=20.50
const numero3=-36
console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//STRING
const alumna = 'Claudia'
const alumno = 'Marco'
const numero4 = "200"
const numero5 = 200

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

//BOOLEAN ----> true false

const tieneDescuento = false

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

//UNDEFINED

let nombre
console.log(nombre)
console.log(typeof nombre)

//NULL --> es un object

let apellido = null
console.log(apellido)
console.log(typeof apellido)

//object
//BigInt
//Symbol

const edad= 55
const _edad = 25
const edadDeMiHijo = 15
console.log(edad)

//let --> ES6 (el uso de let es lo recomendado)
//*Si podemos reasignar su valor

let edad2= 35
edad2=36
edad2=22

console.log(edad2)
console.log(typeof edad2)

edad2= "hola"
console.log(typeof edad2)

//ioperadores matematicos

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2)//Residuo
console.log(2 ** 3)//dos elevado al cubo  

//OPERADORES DE ASIGNACION

const genero = 'femenino'

console.log(genero + '*')

//OPERADORES DE COMPARACION

//Operador de igualdad y desigualdad

console.log(1===1)
console.log(1==='1')
console.log(1!==1)

//operadores de comparacion

console.log(5 > 8)
console.log(5 < 8)
console.log(5 >= 8)
console.log(5 <= 8)


//Operadores (AND OR Negacion)

console.log(true && false)//AND
console.log(true || false)//OR
console.log(!true)//NEGACION

//OPERADOR DE CONCATENACION

const saludo= 'Hola, '
const nombreCompleto = 'Hiroito' + '' + 'Sánchez'
const miEdad=37

const saludoAmigo = saludo + nombreCompleto + '. Tengo' + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

//EJERCICIOS

//1. Retornar true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)
console.log(cadena1.length === cadena2.length)

// Retornar true si un numero es menor que sino devolver false

const numero = 35
console.log( numero < 40)
 //3. retornar true si un numero es menor que 60 si no devolver false
const num1 = 55
console.log(num1 < 60)
 //4. retornar true si un numero es par sino devolver false
const num2 = 36
const resto= 36 % 2 
console.log( resto === 0)
 //5. retornar true si un numero es impar sino deolver false
 const num3 = 35
 const resto1= num2 % 2 
 console.log( resto !== 0)
 //6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores de base y altura
 const base=5
 const altura =2
 const area = (base*altura)/2
 console.log(area)
 //7. almacenar en una constante un numero de 3 cifras y mostrar la suma de sus cifras elevadas al cubo
 const numero33 = 523
 const conte = numero33.toString()   
    const x=parseInt(conte[0])
const y=parseInt(conte[1])
const z=parseInt(conte[2])
const sumaNumero=(x+y+z)**3 
 console.log(x)
 console.log(y)
 console.log(z)
 console.log("La suma de cifras elevado al cubo es: " + sumaNumero)

 //8. almacenar en una constante el monto de dinero, 
 //luego mostrar cuant le toca a cada 
 //socio segun la siguietne tabla
 //socioA = 30% SocioB=20%, socioC = 60%
 const dinero = 150
 const socioA = dinero*0.3
 const socioB = dinero*0.2
 const socioC = dinero*0.5
 
 console.log("Dinero ingresado: " + dinero)
 console.log("socioA: " + socioA)
 console.log("socioB: " + socioB)
 console.log("socioC: " + socioC)

 if(true){
    //Verdadero
 }
 const numeroo = 40

 const esPar = numero % 2 === 0

 if(esPar){
    console.log('Este numero es par')
 }


 //1. Determinar si la edad de una persona es mayor de edad o menos de edad 
 //mostrando mayor edad o menor edad

 const age=37
if(age >= 18){
    console.log("Mayor edad")
}else{
    console.log("Menor de edad")
}
// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const word = "ingles"
if(word === "español"){
    console.log("Hola")
}else if (word === "ingles"){
    console.log("Hello")
}else if(word === "aimara"){
    console.log("Kamisaraki")
}
   

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

const number=15
if(number % 3===0 && number % 5 === 0){
    console.log("fizzbuzz")
}else if(number % 3 === 0){
    console.log("fizz")
}else if(number%5===0){
    console.log("buzz")
}else{
    console.log(number)
}
// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
const number11 = 5
if(number11 % number11 ===0 && number11 % 1 ===0){
    console.log("Número primo")
}else{
    console.log("No es número primo")
}
    // 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
    for (let i = 0; i < 10; i += 2) {
        console.log(i)
    }

//Funciones 
//Definiendo funcines

function nombreDeLaFuncion(){
    //Cuerpo de la funcion
}
nombreDeLaFuncion()

//Funciones sin parametros
function imprimirMiNombre(){
    console.log("Hola soy Hiroito")
    console.log("Y soy frontend")
}
imprimirMiNombre()

//Ejercicios
//1. usando funciones determinar si la edad de una persona es mayor de edad o menor
//de edad mostrando mayor de edad o menor de edad 