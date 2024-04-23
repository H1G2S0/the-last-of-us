
const botoesCarrossel = document.querySelectorAll('.botao');

const imagem = document.querySelectorAll('.imagem');



botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    
    desativarBotaoSelecionado();
    
    ativarBotaoSelecionado(botao);

    esconderImagemAtiva();

    mostrarImagemSelecionada(indice);
    })
}) 

function mostrarImagemSelecionada(indice) {
    imagem[indice].classList.add('ativo');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativo');
    imagemAtiva.classList.remove('ativo');
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
