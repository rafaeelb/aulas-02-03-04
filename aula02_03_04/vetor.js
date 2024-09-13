// utilizando vetores
let modelos = ['Gol', 'Corsa', 'Fusca'];
let marcas = Array('Chevrolet', 'Ford', 'Fiat');
let acessorios = new Array(5);
let cores = []
let categoria = new Array();

// testando arrays
// console.log(modelos)
// console.log(marcas)
// console.log(acessorios)
// console.log(cores)
// console.log(categoria)

// console.log(modelos[0])

let nome_modelo = modelos[0];
// console.log(nome_modelo)

// adicionar um elemento no final
modelos.push('HB20')
// console.log(modelos)

//adicionar um elemento no começo
modelos.unshift('Logan')
// console.log(modelos)

// remover elementos no inicio
modelos.shift()
// console.log(modelos)

// remover elementos no final
modelos.pop()
// console.log(modelos)

// concatena duas (ou mais) arrays em uma nova array
let frutas = ['Laranja','Melancia','Morango'];
let vegetais = ['Batata-doce','Cenoura','Milho'];
let feira = frutas.concat(vegetais);
// console.log(feira);

let frutas_ = ['Laranja','Melancia','Morango','Uva','Caju'];
let frutas_sel = frutas_.slice(1,3);

//separar elementos

let existe = frutas.includes('morango')
let numeros = [1,2,3,4,5,6];

// dobra os caracteres


// console.log(frutas_sel);

// adiciona e remove elementos, primeiro parametro é o indice e o segundo parametro é a quantidade que se deseja remover logo após o indice determinado
// frutas_.splice(2,2,'Manga','Kiwi');

// console.log(frutas_);d
// console.log(existe);
let texto = frutas.join(', ')
// console.log(texto);
let dobra = numeros.map(x=> x* 2);
// console.log(dobra);
let pares = numeros.filter(x => x %2==0);
// console.log(pares);

function teste(t){
    // console.log(t);
}

// teste('Rafael');

//ternario(if-else simplificado em uma linha)
let nota = 6;
// let res = nota>=6 ? "Aprovado":"Reprovado"

//ou
// let resp = 60;
// if(nota >=60){
//     console.log("Aprovado");
// }else{
//     console.log("Reprovado");
// }

// let numeros = [1,2,3,4,5,6];

// localiza o elemento após o 2
let localiza_elementos = numeros.find(x => x > 2);
// console.log("Foi localizado o elemento: "+localiza_elementos);
// localiza o index após o 2
let localiza_index = numeros.findIndex(x=> x>2);
// console.log("Foi localizado o index: "+localiza_index);
// pelo menos um atende a regra de ser maior que 2
let maior = numeros.some(x => x >2 );
// console.log("Atende a condição lógica: "+maior);
// todos atendem a regra de serem maiores que 0
let maior2 = numeros.every(x=> x>0);
// console.log("Atende a condição lógica?: "+maior2);

let n_aleatorio = [10,12,5,3,1,0,6,2,8,7];
console.log(n_aleatorio);

// tenta ordenar do menor para o maior
n_aleatorio.sort();
console.log(n_aleatorio);

// ordena do maior para o menor
n_aleatorio.reverse();
console.log(n_aleatorio);