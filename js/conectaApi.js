async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const retornoConvertido = await conexao.json();
    
    return retornoConvertido;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(busca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
