*** Settings ***
Library      myrobot.py

*** Variables ***
${nome}=    joao
${senha}=    UC25100843

*** Test Cases ***
Teste de cadastro
    cadastra usuario             ${nome}    ${senha}
    o nome cadastrado deve ser   ${nome} 


Teste de login com usuario errado
    cadastra usuario             ${nome}    ${senha}
    o usuario solicita acesso    joao    ${senha}
    o estado do usuario deve ser    offline

Teste de login com senha errada
    cadastra usuario             ${nome}    ${senha}
    o usuario solicita acesso    ${nome}    abcd
    o estado do usuario deve ser    offline

Teste de login com usuario e senha errados
    cadastra usuario             ${nome}    ${senha}
    o usuario solicita acesso    joao    UC25100843
    o estado do usuario deve ser    offline


Teste de login com credenciais corretas
    Dado que o usuario esta logado   ${nome}    ${senha}
    o estado do usuario deve ser    online

Teste de loout
    Dado que o usuario esta logado    ${nome}    ${senha}
    o usuario encerra o Acesso
    o estado do usuario deve ser    offline


*** Keywords ***
Dado que o usuario esta logado
    [Arguments]     ${nome_cadastro}    ${senha_cadastro}
    cadastra usuario             ${nome_cadastro}    ${senha_cadastro}
    o usuario solicita acesso    ${nome_cadastro}    ${senha_cadastro}