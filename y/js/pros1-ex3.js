function senhaAleatoria() {
    let name = document.getElementById("nomeUs").value;
    let nome1 = name.length;
    let teste = 20 - nome1;

    function gerarMistura(tamanho, nome) {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
        let resultado = "";

        // gera a mistura de caracteres
        for (let i = 0; i < tamanho; i++) {
            const arr = new Uint32Array(1);
            window.crypto.getRandomValues(arr);
            let randomIndex = arr[0] % caracteres.length;
            resultado += caracteres[randomIndex];
        }

        // escolhe uma posição aleatória para inserir o nome
        const randomNome = new Uint32Array(1);
        window.crypto.getRandomValues(randomNome);
        let posicao = randomNome[0] % (resultado.length + 1);
        // +1 porque pode ser inserido até no final

        // insere o nome na posição escolhida
        let senhaFinal = resultado.slice(0, posicao) + nome + resultado.slice(posicao);

        return senhaFinal;
    }

    let senhaPronta = gerarMistura(teste, name)

    document.getElementById("indicador").innerText = `Sua senha:`;
    document.getElementById("senhacomNome").innerText = `${senhaPronta}`;
}