function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) { //o contains verifica se dentro da classlist de body existe algum elemento
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
        h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode'; 
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //lembrar de pegar o index pois get getbytag retorna um array
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);