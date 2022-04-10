//Pratique a sintaxe de multiplicação de números, uma vez utilizando 
//o parâmetro this de um objeto criado porvocês e depois sem ele.

const maca = {      //objetos com valores
    value: 2,
}

const laranja = {
    value: 3,
}
function mapComThis(arr, thisArg){
    return arr.map(function (item) {
    return item * this.value;              // return para retornar o valor eo resultador constar no log
    }, thisArg);
}


//logando a função com array

const nums = [1,2];

console.log('this -> maça', mapComThis(nums,maca));     //this para informar que o objeto é maça
console.log('this -> laranja', mapComThis(nums,laranja));