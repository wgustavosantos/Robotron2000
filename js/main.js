function alterar(e) {

    if (e.target.innerText === '+') {
        var valor = e.target.parentNode.querySelector('.controle-contador');
        valor.value++;
        
    } else if (e.target.innerText === '-') {
        var valor = e.target.parentNode.querySelector('.controle-contador');
        valor.value--;
    }
}

var braco = document.querySelector('.contrle-contador');
var controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((e) => {
    e.addEventListener('click', (evento) => {
        alterar(evento)
    })
})
c