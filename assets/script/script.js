let lista = document.querySelector('#contact')
lista.addEventListener('mouseenter', entrar)
lista.addEventListener('mouseout', saiu)

function entrar() {
    lista.style.color = 'gray'
}

function saiu() {
    lista.style.color = 'white'
}