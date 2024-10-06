// #1: função COM Parâmetro e Com Retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 56)}`);


// #2: função COM Parâmetro e SEM Retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: função SEM Parâmetro e COM Retorno
function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual());


// #4: função SEM Parâmetro e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();