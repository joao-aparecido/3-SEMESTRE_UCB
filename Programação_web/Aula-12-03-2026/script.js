//Buscar um elemento HTML
let meuElemento = document.getElementById("paragrafo"); //Buscando pelo ID
console.log(meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);


//imprimir o conteúdo da tag
//console.log(paragrafo1.textContet);
for (let i=0; i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento via javascript
let destino = document.getElementById("elemento"); //Busca o elemento HTML
let p = document.createElement("p");//Cria o novo elemento HTML
p.textContent = "Paragrafo criado via javascript";// Insere o conteúdo no elemento 
destino.append(p);//add ao DOM

let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2"];
for ( let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}

lista.append(ul);

