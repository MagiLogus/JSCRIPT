// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let prompt = require('prompt-sync')();

let n1 = parseInt(prompt("digite o primeiro numero: "))
let n2 = parseInt(prompt("digite o segundo numero: "))
let n3 = parseInt(prompt("digite o terceiro numero: "))


if (n1<n2<n3) {
    console.log("Os numeros estão em ordem crescente !")
} else {
    console.log("Os numeros não estão em ordem crescente !")
}