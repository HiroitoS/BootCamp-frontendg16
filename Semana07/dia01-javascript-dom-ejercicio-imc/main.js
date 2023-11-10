// console.log("Hola a todos")
const inputPeso =document.querySelector('#inputPeso')
const inputAltura =document.querySelector('#inputAltura')
const divresultado = document.querySelector('#resultado')
console.log(inputPeso, inputAltura)

const btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', function(event){
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso, altura)
    
    const indiceDeMasaCorporal = peso / (altura / 100 * altura / 100)

    console.log(indiceDeMasaCorporal)

    let resultado = ''

    if(indiceDeMasaCorporal < 18.5){
        resultado = 'Baja'
        }else if(indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9) {
            resultado = ('Normal')
    } else if(indiceDeMasaCorporal > 25 && indiceDeMasaCorporal<= 29.9){
        resultado = 'Sobrepeso'
    }else if(indiceDeMasaCorporal > 30){
        resultado = 'Obeso'
    } else {
        resultado = 'Datos Incorrectos'
    }
    console.log(divresultado)

    divresultado.innerText = 'Tu índice de Masa Corporal es ' + resultado + '. Y es ' + indiceDeMasaCorporal.toFixed(2)
})
