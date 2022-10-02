import { conectApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const inputSearch = document.querySelector("[data-busca]").value;
    const busca = await conectApi.buscaVideo(inputSearch);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.map(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem
    )));
}

const botaoBusca = document.querySelector("[data-botao-busca]");

botaoBusca.addEventListener("click", evento => buscarVideo(evento))