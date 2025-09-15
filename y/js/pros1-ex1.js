function analisarTexto() {
  // 1. Capturar o texto do usuário
  var texto = document.getElementById("texto").value;

  // 2. Transformar em array de palavras (removendo espaços extras e deixando minúsculo)
  var palavras = texto.toLowerCase().trim().split(/\s+/);

  // Se não houver palavras, parar
  if (texto.trim() === "") {
    document.getElementById("totalPalavras").innerText = "Nenhuma palavra encontrada.";
    document.getElementById("palavraLonga").innerText = "";
    document.getElementById("palavraFrequente").innerText = "";
    return;
  }

  // 3. Contar o total de palavras
  var total = palavras.length;

  // 4. Encontrar a palavra mais longa
  let maisLonga = "";
  palavras.forEach(i => {
    if (i.length > maisLonga.length) {
      maisLonga = i;
    }
  });

  // 5. Contar frequência das palavras
  let contagem = {};
  palavras.forEach(p => {
    if (contagem[p]) {
      contagem[p] += 1;
    } else {
      contagem[p] = 1;
    }
  });

  // 6. Descobrir a palavra mais frequente
  let palavraMaisFrequente = "";
  let maxFreq = 1;
  for (let palavra in contagem) {
    if (contagem[palavra] > maxFreq) {
      maxFreq = contagem[palavra];
      palavraMaisFrequente = palavra;
      document.getElementById("palavraFrequente").innerText = "Palavra mais frequente: " + palavraMaisFrequente + " (" + maxFreq + " vezes)";
    } else if (contagem[palavra] == 1) {
      document.getElementById("palavraFrequente").innerText = "Não há palavras repetidas";
    }
  }

  // 7. Mostrar resultados no HTML
  document.getElementById("totalPalavras").innerText = "Total de palavras: " + total;
  document.getElementById("palavraLonga").innerText = "Palavra mais longa: " + maisLonga;

}