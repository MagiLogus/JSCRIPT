// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let prompt = require('prompt-sync')();
let user = prompt ("Digite seu usuário: ");
let senha = prompt ("Digite sua senha: ");

if (user == "admin" && senha == "senha123") {
    console.log(`Usuário correto, você está logado`)
} else {
    console.log(`Usuário incorreto, tente novamente !`)
}