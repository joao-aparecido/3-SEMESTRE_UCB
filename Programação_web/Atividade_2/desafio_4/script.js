let linhas = Number(prompt("Digite a quantidade de  linhas!"));

for (let i = 1; i <= linhas; i++){
    let texto = "";
    for (let j = 1; j <= i ; j++ ){
        texto = texto + "*";
        
    }
    console.log(texto);
}