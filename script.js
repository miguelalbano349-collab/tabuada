
function gerarTabuada() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
        resultado.innerHTML = "<p>Digite um número inteiro entre 1 e 10.</p>";
        return;
    }

    let conteudo = `<h2>Tabuada do ${numero}</h2>`;

    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        conteudo += `<p>${numero} x ${i} = ${multiplicacao}</p>`;
    }

    resultado.innerHTML = conteudo;
}
