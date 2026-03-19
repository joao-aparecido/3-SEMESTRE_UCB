let numeros = Number(prompt("Digite a quantidade de termos:"));

let termo = 0;
let soma = 0;
let sequencia = "";

for (let i = 1; i <= numeros; i++) {

    termo = termo * 10 + 1;  

    soma += termo;       

    sequencia += termo;      

    if (i < numeros) {
        sequencia += " + ";
    }
}

console.log(sequencia);
console.log("A soma é: " + soma);