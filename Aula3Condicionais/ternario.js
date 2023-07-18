const saldo = 12;

const unidade = (saldo === 1 ? "real" : "reais" );
/*
if (saldo > 1) {
    console.log(`voce tem ${saldo} reais`);
} else {
    console.log(`Voce tem ${saldo} real`);
} */ 

console.log(`Voce tem ${saldo} ${unidade}`);