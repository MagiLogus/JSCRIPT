// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let prompt = require('prompt-sync')();

let peso = parseFloat(prompt("digite seu peso em quilogramas: "))
let altura = parseFloat(prompt("digite sua altura: "))

let IMC = (peso / (altura * altura))

if (IMC >= 25.0 && IMC <= 29.9) {
    console.log(`Seu IMC é de: ${IMC}
    Estando em: Sobrepeso
    `)
} else if (IMC >= 30.0 && IMC <= 34.9) {
    console.log(`Seu IMC é de: ${IMC}
    Estando em: Obesidade grau 1
    `)
} else if (IMC >= 35.0 && IMC <= 39.9) {
    console.log(`Seu IMC é de: ${IMC}
    Estando em: Obesidade grau 2
    `)
} else if (IMC >= 40.00) {
    console.log(`Seu IMC é de: ${IMC}
    Estando em: Obesidade grau 3`)
} else {
    console.log(`Você esta fora da faixa de medida`)
}
