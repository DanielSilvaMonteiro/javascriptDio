const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cats');
const catImg = document.getElementById('cat');

const getCats = async() => {
try{
 const data = await fetch(BASE_URL);
 const json = await data.json();

 return json.webpurl;
}catch(e){
 console.log(e.message);
}
};

const loadImg = async () =>{
 catImg.src = await getCats(); 
}

catBtn.addEventListener('click', loadImg);
loadImg();


/*Escrita maquina de escrever*/
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split(''); //plit para criar um array de letras
    elemento.innerHTML = '';
    //console.log(textoArray);
    textoArray.forEach((letra, i)=>{
      //  console.log(letra);
      //  console.log(i);
      setTimeout(()=>{
        elemento.innerHTML += letra;
      },125*i)
    });
}
const titulo = document.querySelector('h1');
//console.log(titulo);
typeWrite(titulo);