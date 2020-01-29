const nome = 'Carlos'
const altura = 1.80
const peso = 89
const sexo = 'm'
console.log(typeof "string")
const imc = peso /(altura * altura)
    if (imc >= 30 || imc <= 29.9) {
        console.log (`Carlos você está acima do peso seu IMC: ${imc}`)
    } else {
        console.log (`Carlos você não está acima do peso seu IMC é:${imc}`)
    }