const botoes = document.querySelectorAll('.botao');
const botaoSelecionado = document.querySelector('.selecionado')

const imagem = document.querySelectorAll('.imagem');
const imagemAtiva = document.querySelector('ativo');


botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    
    botaoSelecionado.classList.remove('selecionado');
    imagemAtiva.classList.remove('ativo');

    })
})