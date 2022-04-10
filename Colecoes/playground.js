function validaArray(arr,num){ //indicação de parametros de 1 array ede um número-->

  try{

  //validação de erro Reference error caso se não existir array e nem número-->
  if(!arr && !num) throw new ReferenceError("Envie os parâmetros"); 

  //validação de erro TypeError caso o array não seja do tipo object-->
  if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

  //validação typeError caso o número não seja do tipo numero-->
  if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo number");

  //validação RangeError se o tamanho do array for diferente do numero-->
  if(arr.length !== num) throw new RangeError ("Tamanho inválido")

  return arr;

  }
  catch(e){
      // filtrando os tipos de erros-->
      if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError!")
        console.log(e.message)
      } else if (e instanceof TypeError){
        console.log("Este erro é um TypeError!")
        console.log(e.message)
      } else if (e instanceof RangeError){
        console.log("Este erro é um RangeError!")
        console.log(e.message)
      } else{
        console.log("Tipo de erro não esperado :"+ e)
      }
      
  }

}

console.log(validaArray([1,2,3,4,5], 5));