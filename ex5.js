// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let prompt = require('prompt-sync')();

let valorCompra = parseFloat(prompt("digite o valor da sua conta : "))

if (valorCompra <= 100.00) {
    console.log("Você não tem direito a desconto !")
} else if (valorCompra >= 100.01 && valorCompra <= 200.00) {
    valorDesconto = valorCompra - (valorCompra * 0.10)
    console.log(`Você tem direito a 10% de desconto !, ficando no total de R$${valorDesconto}`)
} else if (valorCompra > 200.00) {
    valorDesconto = valorCompra - (valorCompra * 0.20)
    console.log(`Você tem direito a 20% de desconto !, ficando no total de R$${valorDesconto}`)
}