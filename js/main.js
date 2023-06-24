function alterar(e) {

    if (e.target.id === 'somar') {
        braco.value++;
    } else if (e.target.id === 'subtrair') {
        braco.value--;
    }
}

var soma = document.querySelector('#somar');
var subtracao = document.querySelector('#subtrair');
var braco = document.querySelector('#braco');
var controle = document.querySelectorAll('.peca > .controle > .controle-ajuste');

controle.forEach((e) => {
    e.addEventListener('click', (evento) => {
        alterar(evento)
    })
})
