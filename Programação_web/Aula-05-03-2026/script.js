//alert("Teste");

//variáveis:
var animal = "Gato" ;
console.log(animal);

let nomeCompleto = "fulano da Silva";
console.log(nomeCompleto);

var valor0 = 2;
const valor1 = 10;
console.log("o valor é:" + valor1);
valor0 = 3; // permite reatribuição, pois é do tipo VAR ou LET.
//valor1 = 30; como é uma constante, não permite reatribuição.

//verificar o tipo da variável
console.log(typeof valor0);

//impressão
//conslo.log
//tamplete literal
console.log(`Seja bem-vindo ${nomeCompleto}. Aproveite a estadia! `);

//algoritmo: entrada + processamento + saída;
// entrada de dados 
var nome = window.prompt("Digite o seu nome: ");
//Saída de dados
document.writeln(`Seja bem-vindo ${nome}. Aproveite a estadia! `);

//operadores aritméticos 
// + - * / **

//operadores de compração
// (< >) (!=) (==) (===) (!==)
console.log(5 == '5'); //olha apenas para valores OU - LÓGICO
console.log(5 === '5'); //olha para tipo e valor E - LÓGICO

//Criar um sistema que realiza a soma de dois números 
//O usuario deve informar quais são os números 

var numero1 = Number(window.prompt("Digite o 1° numero: "))
var numero2 = Number(window.prompt("Digite o 2° número: "))
const resultado = numero1 + numero2;
document.writeln(`O resultado de ${numero1} + ${numero2} = ${resultado}. Parabens tu é foda!  `);

// estrutura de controle (if-else)
    if (resultado >=18){
        console.log("Maior de idade");    
    }else {
        console.log("menos de idade")
    }

// estrutura de repetição: for, while e do-while
    for (let i=0; i<10;i++){
        console.log("Iteração: " + i);
    }

    while(i<5){
        console.log("Interação: " + i);
        i++;
    }

// escolha-caso
var diaSemana=3
switch (diaSemana){
    case 1:
        console.log("domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;
    
    default:
        console.log("Escolha uma opção");

}


