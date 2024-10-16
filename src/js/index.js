const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

// Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {
        //Remove a classe aberto do cartao que esta aberto
        esconderCartaoPokedev();
        
        // Ao clicar em um pokedev da lsitagem pegar o id desse pokedev pra saber qual cartao abrir
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        // remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevAtivo();

        //Adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoListagem.classList.add('ativo');
}

function desativarPokedevAtivo() {
    const pokedevAtivoListagem = document.querySelector('.ativo');
    pokedevAtivoListagem.classList.remove('ativo');
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idCartaoPokedevAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevAbrir);
    cartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}
