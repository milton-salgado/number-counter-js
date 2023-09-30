function incrementa() {
    let paragrafo = document.querySelector("#valor");
    let valor = Number(paragrafo.textContent);
    if (valor < 10) valor++;
    paragrafo.textContent = valor;
}

function decrementa() {
    let paragrafo = document.querySelector("#valor");
    let valor = Number(paragrafo.textContent);
    if (valor > 0) valor--;
    paragrafo.textContent = valor;
}

function zera() {
    let paragrafo = document.querySelector("#valor");
    paragrafo.textContent = 0;
}
