let P = "Dinheiro";
switch (P) {
    case "Débito":
        console.log(`Por conta da forma de pagamento escolhida, você recebeu 10% de desconto`);
        break;
    case "Dinheiro":
        console.log("Por conta da forma de pagamento escolhida, você recebeu 15% de desconto")
        break;
    case "Pix":
        console.log("Por conta da forma de pagamento escolhida, você recebeu 15% de desconto")
        break;
    case "2x":
        console.log("Por conta da forma de pagamento escolhida, você pagará o valor sem juros")
        break;
    default:
        console.log("Por conta da forma de pagamento escolhida, você recebeu 10% de juros");
        break;
}