while (true){
    let numeroAleatorio = Math.floor(Math.random()*3)+1;
    let escolha = Number(prompt("Escolha uma opção \n1-Pedra\n2-Papel\n3-Tesoura"))

    if(escolha == numeroAleatorio){
        console.log("Empate")
    }
    else if(
    (escolha == 1 && numeroAleatorio == 3) ||
    (escolha == 2 && numeroAleatorio == 1) ||
    (escolha == 3 && numeroAleatorio == 2)
    ){
        console.log("ganhou! Parabens!");
        break;    
    }  
    else{
        console.log("Perdeu playboy!")
        break;
    }

}