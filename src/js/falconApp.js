var contadorElementos = Array.from(document.querySelectorAll(".cont"));
var contadorObserver;

function aumentarContador(elemento, valorFinal) {
  var valorAtual = 0;
  var incremento = Math.ceil(valorFinal / 200);

  var animarContador = function() {
    if (valorAtual <= valorFinal) {
      elemento.textContent = valorAtual.toLocaleString();
      valorAtual += incremento;
      setTimeout(animarContador, 10);
    } else {
      elemento.textContent = valorFinal.toLocaleString();
    }
  };

  animarContador();
}

function verificarElementoVisivel(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var valorFinal = parseInt(entry.target.textContent);
      aumentarContador(entry.target, valorFinal);
      contadorObserver.unobserve(entry.target);
    }
  });
}

function observarElementos() {
  contadorObserver = new IntersectionObserver(verificarElementoVisivel);
  contadorElementos.forEach(function(contadorElemento) {
    contadorObserver.observe(contadorElemento);
  });
}

AOS.init();
observarElementos();

//CONFESSO QUE ISSO VEIO DO NOSSO AMIGO, AINDA ESTOU TENTANDO ENTENDER ESSE CODIGO...