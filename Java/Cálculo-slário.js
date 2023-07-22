function calcularsaláriototal (vb,ben){
    
    if (vb>=0 && vb <=1100){
        const total = (vb + ben -(vb*0.05));
        return `O salário de ${vb} adicionado com seus benefícios de ${ben} subtraindo pelo imposto mediante ao salário de 5% e dá um salário de ${total}`
    }
    else if (vb>=1101 && vb <=2000){
        const total = (vb + ben - (vb*0.10));
        return `O salário de ${vb} adicionado com seus benefícios de ${ben} subtraindo pelo imposto mediante ao salário de 10% dá um salário de ${total}`
    }
    else if (vb>=2001 && vb <=3000){
        const total = (vb + ben - (vb*0.15));
        return `O salário de ${vb} adicionado com seus benefícios de ${ben} subtraindo pelo imposto mediante ao salário  de 15% dá um salário de ${total}`
    }
    else if(vb>3000) {
        const total = (vb + ben - (vb*0.15));
        return `O salário de ${vb} adicionado com seus benefícios de ${ben} subtraindo pelo imposto mediante ao salário de 15%dá um salário de ${total}`
    }
}
console.log(calcularsaláriototal(3000,250));
   

