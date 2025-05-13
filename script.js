const elemTexto = document.querySelector(".sobre");
const elemBotaoLight = document.querySelector(".botao-light");
const elemBotaoDark = document.querySelector(".botao-dark");
const elemInformacoes = document.querySelector(".informacoes");
const elemBotaoInformacoes = document.querySelector(".botao-informacoes");

elemTexto.textContent = "Sobre mim";

//elemTexto.classList.toggle("amarelo");

function alterarclasse() {
  console.log("Voce clicou no texto Sobre mim");
  alert("Voce clicou no Texto sobre mim");

  //elemTexto.classList.remove("amarelo");
  //elemTexto.classList.add("vermelho");
  //elemTexto.classList.toggle("amarelo");
  // elemTexto.classList.toggle("vermelho");
}

elemTexto.addEventListener("click", alterarclasse);

elemBotaoInformacoes.addEventListener("click", function () {
  console.log("clicou no botão de informações");
  elemInformacoes.classList.toggle("visivel");

  console.log(elemInformacoes.classList.contains("visivel"));

  if (elemInformacoes.classList.contains("visivel")) {
    elemBotaoInformacoes.textContent = "Ocultar informações";
  } else {
    elemBotaoInformacoes.textContent = "Exibir informações";
  }
});

//adicionar evento de clique nos boões  ligth/dark

elemBotaoLight.addEventListener("click", function () {
  console.log("Clicou no botão Light");
  document.body.classList.toggle("light");
});

elemBotaoDark.addEventListener("click", function () {
  console.log("Clicou no botão Dark");
  document.body.classList.toggle("dark");
});
