function alterar(e) {

    if (e.target.innerText === '+') {
        var valor = e.target.parentNode.querySelector('[controle-valor]');
        valor.value++;
        
    } else if (e.target.innerText === '-') {
        var valor = e.target.parentNode.querySelector('[controle-valor]');
        valor.value--;
    }
}

var controle = document.querySelectorAll('[controle-data]');

controle.forEach((e) => {
    e.addEventListener('click', (evento) => {
        alterar(evento)
    })
})
