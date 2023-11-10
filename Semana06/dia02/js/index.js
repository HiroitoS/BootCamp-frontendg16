console.log('hola JS')

//Arrays
const numero = 399
const cadena = 'Hiroito'
const esMayor = 39


//Un arreglo tiene elementos a cualquier tipo de dato:cadena, numero
//boolean, indefined, null, arrays, objects, tec.

const listaDeValores =[1,2,3,'Hiroito', 'Sánchez', true, ]

//Lecstura de los elementos de un arreglo
console.log(listaDeValores)
console.log(listaDeValores[0])
console.log(listaDeValores[4])
console.log(listaDeValores[100])//undefined

//Escritura en un arreglo

listaDeValores[2]=99
console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo

listaDeValores.push('javascript')
console.log(listaDeValores)

//Remover elementos de un arreglo

listaDeValores.pop()
console.log(listaDeValores)

//eliminar un elemento
listaDeValores.splice(4,1)

console.log('splice', listaDeValores)

//Obtener el tamaño de nuestro arreglo
console.log('bienvenido'.length)
console.log(listaDeValores.length)

//OBJETOS

//{KEY:VALUE}

const miObjeto={
    nombre:'Hiroito',
    apellido:'Sanchez',
    colorFavorito:'azul',
    'mi edad':37,
    coloresFavorito:['rosado','rojo','azul'],
    cursos:[
        {
            nombre:'Matematica',
            nota: 18
        },
        {
            nombre:'Algoritmo',
            nota:20
        }
    ]
}

console.log(miObjeto)

//LEER

console.log(miObjeto.nombre)//Hiroito
console.log(miObjeto.apellido)//Sanchez
console.log(miObjeto.edad)//undefined
console.log(miObjeto["mi edad"])//ok

console.log(miObjeto.coloresFavorito[2])
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1].nota)


delete miObjeto.colorFavorito
console.log(miObjeto)

//insertar una nueva propiedad a un objeto

miObjeto.platoFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos']=['Crash team racing','Mario','Minecraft']

console.log(miObjeto)

//DESTRUCTURING


//Una forma de estraer las propiedades de un objeto o un arreglo
//en variable

//DESTRUCTURING PARA OBJETOS

const nombreValue = miObjeto.nombre
console.log(nombreValue)

const {nombre,apellido}=miObjeto

console.log(nombre,apellido)

const {nombre:nombreValor,apellido:apellidoValor}=miObjeto


//destructuring para arreglos

const amigos = ['Angel', 'Carlos', 'Claudia', 'Franklin', 'Samael']

const [amigo1, amigo2]=amigos
console.log(amigo1)
console.log(amigo2)


//SPREAD OPERATOR

const producto = {
    nombre:'Laptop',
    precio:6800,
    categoria: 'TEC'
}

const cliente={
    nombre:'Claudia',
    isVip: true
}


console.log(producto + cliente)//mal
const nuevoObjeto = {...producto,...cliente}

console.log(nuevoObjeto)


//SPREAD OPERATOR SIN COLICIONES

const nuevoObjetoSinColisiones = {
    producto:{...producto},
    cliente:{...cliente}
}

console.log(nuevoObjetoSinColisiones)

//OTROS METODOS DE OBJETOS
console.log(Object.keys(producto))//Obtenemos solo las claves del objeto
console.log(Object.values(producto))//Obtenemos solo los valores del objeto
console.log(Object.entries(producto))//convertimos un objeto en arreglo







