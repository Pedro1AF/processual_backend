// funcao chamada quando o botao "Enviar numeros" é clicado
function analiseNum() {
    // todos os 10 arrays com os 10 numeros inseridos pelo usuario
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var num6 = document.getElementById("number6").value;
    var num7 = document.getElementById("number7").value;
    var num8 = document.getElementById("number8").value;
    var num9 = document.getElementById("number9").value;
    var num10 = document.getElementById("number10").value;



    // guarda todos os valores que foram puxados destas variaveis acima em uma lista
    let listaOriginal = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
    let semvazio = listaOriginal.every(valor => valor === "");
    if (semvazio) {
        document.getElementById("totalNumeros").innerText = `Total de numeros: nenhum numero inserido`;
        document.getElementById("ordenadosNumeros").innerText = `Total de numeros: nenhuma lista existente`;
        document.getElementById("semrepetNumeros").innerText = `Total de numeros: sem numeros inseridos`;
        return;
    }

    document.getElementById("totalNumeros").innerText = `Total de numeros: ${listaOriginal}`;

    // utiliza o array 'listaOriginal' e compara o pimeiro valor a todos os outros valores criando assim uma ordem crescente,
    // tendo como parâmetro resultados positivos e negativos 
    let numeroOrdenado = listaOriginal.sort((a, b) => a - b);
    document.getElementById("ordenadosNumeros").innerText = `Lista ordenada e crescente dos numeros: ${numeroOrdenado}`;

    // utiliza "...new Set()" para criar um novo objeto Set a partir do array 'numeroOrdenado',
    // o Set() armazena somente valore unicos nao contentendo duplicatas
    // '...' converte o objeto Set de volta para um array
    let arrayUnico = [...new Set(numeroOrdenado)];
    document.getElementById("semrepetNumeros").innerText = `Lista sem repetições: ${arrayUnico}`;


    //const enviarBtn = document.getElementById('enviar');
    //const novoValorBtn = document.getElementById("novoValor");
    //enviarBtn.addEventListener("click", () => {
    //    // Ativa o botão "novoValor"
    //   novoValorBtn.disabled = false;
    //});
}