const teste = 18 == "18"; //tem o mesmo conteudo mas não o mesmo tipo
const naoEhIdentico = 18 === "18" ; //mesmo conteudo mas tipos diferentes
const ehIdentico = 18 === 18 ; // mesmo tipo(number e string) e mesmo conteudo
const estritamenteDiferente = 3 !== "3";// mesmo conteudo mas tipos diferentes 
console.log(teste);// retorna true quando os operadores sao iguais (independente do tipo)
console.log(naoEhIdentico)
console.log(ehIdentico);//retorna true quando são iguais e do mesmo tipo
console.log(estritamenteDiferente);//retorna true quando não sao iguais