let numeroSecreto = Math.floor(Math.random() * 20) + 1;

while (true){
    let chute = Number(window.prompt("Digite um número aleatório entre 1 e 20!"));
    
    if(chute == numeroSecreto){
        alert("Parabéns vc é foda!")
        break;
        }
    if(chute > numeroSecreto){
        alert("Chutou muito alto! Tente um chute menor!")
        }
    if(chute < numeroSecreto){
        alert("Chutou muito fraco! Tente um número maior!")
        }
}