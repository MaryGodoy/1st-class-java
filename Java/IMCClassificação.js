
let peso=50
let altura= 1.65
let imc= peso / (altura * altura);
console.log (`Índice de Massa Corporal Classificação`);
if (imc<18.5){
    console.log(`IMC apresenta magreza`);
}
else if(imc>=18.5 && imc<=24.9){
    console.log (`IMC apresenta normalidade`);
}
else if(imc>=25 && imc<=29.9){
    console.log (`IMC apresenta sobrepeso`);
}
else if(imc>=30 && imc<=34.9){
    console.log (`IMC apresenta obesidade grau |`);
}
else if(imc>=35 && imc<39.9){
    console.log(`IMC  apresenta obesidade grau ||`);
}
else{
    console.log(`IMC  apresenta obesidade grau |||`);
}