
const botoesCarrossel = document.querySelectorAll('.botao');

const imagem = document.querySelectorAll('.imagem');



botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
    
    botao.classList.add('selecionado');

    const imagemAtiva = document.querySelector('.ativo');
    imagemAtiva.classList.remove('ativo');

    imagens[indice].classList.add('ativo');
    })
}) 