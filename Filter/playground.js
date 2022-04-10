//filtre e retorne os números pares de um array;

function filtraPares(arr){
    return arr.filter(callback)         // dentro do parenteses seria a function - callback
}

function callback (item){       //ela foi feita aqui fora
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));