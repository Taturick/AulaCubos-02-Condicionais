const produto = 350;
const parcelas = 8;
const aPrazo = produto / parcelas;
/*
console.log(`Pagamento a vista voce vai pagar ${(produto -(produto * aVista ))} `);

console.log(`Pagamento a prazo pode ser dividido em até 6 vezes 
segue tabela de valores das parcelas: ${parcelas} parcela de  ${ produto / parcelas} `)
*/
if (parcelas === 1 ){
        console.log(`Pagamento a vista voce vai pagar ${(produto -(produto * 0.1 ))} reais, Promoção de 10% de desconto!!`)
} else {
   if ( parcelas >=2 && parcelas <=6 ){
       console.log(`Parcelamento a prazo em até 6 vezes sem juros, ${parcelas} parcela de  ${ (produto / parcelas).toFixed(2)} reais`)
}else if (parcelas >= 7 && parcelas <=12) {
    const calc = produto * (1 + 1/100) ** parcelas;
    const calcTotal = ((calc / parcelas).toLocaleString('pt-BR'))
    console.log(`Parcelamento acima de 7 meses são acrescidos juros de 1% ao mes, voce devera pagar ${parcelas} parcelas de ${calcTotal} reais`)
}else {
    console.log("Numeros de parcela não pode ser maior que 12x")
}


}
