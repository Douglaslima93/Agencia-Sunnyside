//Função para a palavra Contato
let lista = document.querySelector('#contact')
lista.addEventListener('mouseenter', entrar)
lista.addEventListener('mouseout', saiu)

function entrar() {
    lista.style.background = 'hsla(210, 9%, 39%, 0.5)'
    lista.style.color = 'white'
}

function saiu() {
    lista.style.color = 'black'
    lista.style.background = 'white'
}
//Fim da função contato



//Funções para a frase Learn More
let learn1 = document.querySelector('#learn1')
learn1.addEventListener('mouseenter', entrar1)
learn1.addEventListener('mouseout', saiu1)

function entrar1(){
    learn1.style.borderBottom = 'thick solid hsl(51, 100%, 49%)'
    learn1.style.borderBottomWidth = '10px'
    learn1.style.marginLeft = '200px'
    learn1.style.marginRight = '200px'
}

function saiu1 () {
    learn1.style.borderBottom = ''  
}


let learn2 = document.querySelector('#learn2')
learn2.addEventListener('mouseenter', entrar2)
learn2.addEventListener('mouseout', saiu2)

function entrar2(){
    learn2.style.borderBottom = 'thick solid hsl(7, 99%, 70%)'
    learn2.style.borderBottomWidth = '10px'
    learn2.style.marginLeft = '200px'
    learn2.style.marginRight = '200px'  
    learn2.style.boxSizing = 'border-box'  
}

function saiu2 () {
    learn2.style.borderBottom = ''  
}
//Fim das Funções da frase Learn more



//Inicio função palavra about
let about = document.querySelector('#about')
about.addEventListener('mouseenter', entrarabout)
about.addEventListener('mouseout', saiuabout)

function entrarabout () {
    about.style.color = 'white'
}

function saiuabout () {
    about.style.color = ''
}
//Fim função palavra about



//Inicio função palavra services
let services = document.querySelector('#services')
services.addEventListener('mouseenter', entrarservices)
services.addEventListener('mouseout', saiuservices)

function entrarservices () {
    services.style.color = 'white'
}

function saiuservices () {
    services.style.color = ''
}
//Fim função palavra about



//Inicio função palavra projects
let projects = document.querySelector('#projects')
projects.addEventListener('mouseenter', entrarprojects)
projects.addEventListener('mouseout', saiuprojects)

function entrarprojects () {
    projects.style.color = 'white'
}

function saiuprojects () {
    projects.style.color = ''
}
//Fim função palavra projects



//Inicio função icone facebook
let facebook = document.querySelector('#facebook')
facebook.addEventListener('mouseenter', entrarfacebook)
facebook.addEventListener('mouseout', saiufacebook)

function entrarfacebook () {
    facebook.style.background = 'white'
}

function saiufacebook () {
    facebook.style.background = ''
}
//Fim função icone facebook



//Inicio função icone instagram
let instagram = document.querySelector('#instagram')
instagram.addEventListener ('mouseenter', entrarinstagram)
instagram.addEventListener ('mouseout', saiuinstagram)

function entrarinstagram() {
    instagram.style.background = 'white'
}

function saiuinstagram () {
    instagram.style.background = ''
}
//Fim função icone instagram


//Inicio função icone twitter
let twitter = document.querySelector('#twitter')
twitter.addEventListener ('mouseenter', entrartwitter)
twitter.addEventListener ('mouseout', saiutwitter)

function entrartwitter() {
    twitter.style.background = 'white'
}

function saiutwitter () {
    twitter.style.background = ''
}
//Fim função icone twitter



//Inicio função icone pinterest
let pinterest = document.querySelector('#pinterest')
pinterest.addEventListener ('mouseenter', entrarpinterest)
pinterest.addEventListener ('mouseout', saiupinterest)

function entrarpinterest() {
    pinterest.style.background = 'white'
}

function saiupinterest () {
    pinterest.style.background = ''
}
//Fim função icone pinterest