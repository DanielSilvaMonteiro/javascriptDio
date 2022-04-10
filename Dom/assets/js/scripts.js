//selecione os elementos: h1, button, footer e body
// Se os elementos possuirem a classe dark-mode, modifique seus estilos
// caso contrário retorne ao estilo original

function changeMode(){
   // console.log('cliquei!');
   changeClasses();
   changeText();

}

//Boa prática, cada função tenha uma responsabilidade só, aqui só altera as classes 
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//Função para alterar texto do button, caso o Body esteja dark ou light
function changeText(){

const lightMode = "Light Mode";
const darkMode = "Dark Mode";

if(body.classList.contains(darkModeClass)){
    button.innerHTML = lightMode;           
    h1.innerHTML = darkMode+' ON';
    return;
}
button.innerHTML = darkMode;
h1.innerHTML = lightMode+' ON';
}

const darkModeClass = 'dark-mode';     // foi criada esta classe devido a repetição da palavra dark-mode
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//console.log(body);

button.addEventListener('click', changeMode)