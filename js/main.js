var soma = document.querySelector('#somar');
var subtracao = document.querySelector('#subtrair');
var braco = document.querySelector('#braco');

soma.addEventListener('click', () => {
    braco.value++;
})

subtracao.addEventListener('click', () => {
    braco.value--;
})