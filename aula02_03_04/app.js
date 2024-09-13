// console.log("Olá mundo");
let x =10
let nome = "Rafael Benício"
let altura = 1.75
let vazio
const idade = 20

// criação de um objeto
let objeto = {
    "nome": "rafael",
    "idade": 12,
    "altura": 1.73
}

// utilizando as variaveis locais
let objeto2 = {
    nome,
    idade,
    altura
}

console.log("Nome: " + nome + "\nIdade: " + idade + "\nAltura: " + altura + "\nvazio: " + vazio)
console.log(objeto)
console.log(objeto2)