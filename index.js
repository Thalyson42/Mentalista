var totalTentativas = 3;
var numeroSecreto = parseInt(Math.random() * 11);
var numeroDeChutes = 1;
var numeroDeDerrotas = 0;
var numeroDeVitorias = 0;

const vitorias = document.getElementById("vitorias");

const derrotas = document.getElementById("derrotas");

const tentativas = document.getElementById("tentativas");
tentativas.innerHTML = totalTentativas;

const chuteContador = document.getElementById("chuteContador");

const chutar = document.getElementById("chutar");

const reiniciar = document.getElementById("reiniciar");
reiniciar.style.display = "none";

const resultadoFinal = document.getElementById("resultadoFinal");

chuteContador.innerHTML = numeroDeChutes;

function Chutar() {
  let win = null;
  const chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  const resultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultado.innerHTML = "acertou!";
    win = true;
    numeroDeVitorias++;
    vitorias.innerHTML = numeroDeVitorias;
    conclusao(win);
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Digite um numero dentro do limite";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Seu numero é maior que o numero secreto";
    numeroDeChutes++;
    chuteContador.innerHTML = numeroDeChutes;
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Seu numero é menor que o numero secreto";
    numeroDeChutes++;
    chuteContador.innerHTML = numeroDeChutes;
  }

  if (numeroDeChutes > totalTentativas) {
    win = false;
    numeroDeDerrotas++;
    derrotas.innerHTML = numeroDeDerrotas;
    conclusao(win);
  }
}

function conclusao(win) {
  chutar.style.display = "none";
  reiniciar.style.display = "inline";

  if (win) {
    resultadoFinal.classList.toggle("venceu");

    resultadoFinal.innerHTML = "Parabens pela vitoria";
  } else {
    resultadoFinal.classList.toggle("perdeu");

    resultadoFinal.innerHTML = "Você perdeu!";
  }
}

function Reiniciar() {
  chutar.style.display = "inline";
  reiniciar.style.display = "none";

  resultadoFinal.classList.remove("perdeu");
  resultadoFinal.classList.remove("venceu");

  numeroDeChutes = 1;
  chuteContador.innerHTML = numeroDeChutes;

  numeroSecreto = parseInt(Math.random() * 11);

  document.getElementById("resultado").innerHTML = null;
}
