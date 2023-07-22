function soma(x,y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(20, 40));
console.log(soma(10, 800));
console.log(soma(20.5, 64));
console.log(soma(288, 80));

//Exercício//
function IMC(peso, altura) {
    const imc= peso / (altura * altura)
    if (imc<18.5){
        return`Seu IMC (${imc}) apresenta magreza`;
    }
    else if(imc>=18.5 && imc<=24.9){
        return`Seu IMC (${imc}) apresenta normalidade`;
    }
    else if(imc>=25 && imc<=29.9){
        return`Seu IMC (${imc}) apresenta sobrepeso`;
    }
    else if(imc>=30 && imc<=34.9){
        return`Seu IMC (${imc}) apresenta obesidade grau |`;
    }
    else if(imc>=35 && imc<39.9){
        return`Seu IMC (${imc}) apresenta obesidade grau ||`;
    }
    else{
        return`Seu IMC (${imc}) apresenta obesidade grau |||`;
    }
}
console.log(IMC(45, 1.65));
function saudação (nome){
    console.log(`Bom dia ${nome}`)
}
saudação ("Esther");

function saudação2(){
    return "Boa noite pessoal"
}
console.log(saudação2());