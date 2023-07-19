// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let prompt = require('prompt-sync')();

let ano = parseInt(prompt("digite seu ano de nascimento: "))

let idade = (2023 - ano)

if (idade > 17) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}