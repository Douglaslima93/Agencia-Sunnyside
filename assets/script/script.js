//Função para a palavra Contato
let lista = document.querySelector('#contact')
lista.addEventListener('mouseenter', entrar)
lista.addEventListener('mouseout', saiu)

function entrar() {
    lista.style.background = 'hsla(210, 9%, 39%, 0.5)'
    lista.style.padding = '10px'
    lista.style.borderRadius = '20px'
}

function saiu() {
    lista.style.background = ''
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
}

function saiu2 () {
    learn2.style.borderBottom = ''  
}

//Fim das Funções da frase Learn mre