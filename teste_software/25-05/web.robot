*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL_CHECK_BOX_DEMO}     https://www.lambdatest.com/selenium-playground/checkbox-demo
${PRIMEIRO_CHECKBOX}      xpath=//input[@type='checkbox']
${MSG_CHECKED}            xpath=//div[@id='__next']/div/main/div/section/div/div/div/p


*** Test Cases ***
Teste da apresentação da mensagem "CHECKED" ao clicar no primeiro checkbox
    Open Browser    ${URL_CHECK_BOX_DEMO}    chrome
    Sleep    2s
    Click Element                 ${PRIMEIRO_CHECKBOX}
    Element Text Should Be        ${MSG_CHECKED}     Checked!
    Sleep    2s
    Close Browser

Teste de seleção do primeiro checkbox
    Skip
    Open Browser    ${URL_CHECK_BOX_DEMO}    chrome
    Sleep    2s
    Click Element                 ${PRIMEIRO_CHECKBOX}
    Checkbox Should Be Selected   ${PRIMEIRO_CHECKBOX}
    Sleep    2s
    Close Browser

Teste de acesso ao google.com
    Skip
    Open Browser            https://www.google.com/    chrome
    Sleep                   2s
    Title Should Contain    Google
    Close Browser

*** Keywords ***
Title Should Contain
    [Arguments]    ${substr}
    ${title}=    Get Title
    Should Contain    ${title}    ${substr}