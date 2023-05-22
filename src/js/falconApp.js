let contadorElementos = Array.from(document.querySelectorAll(".cont"));
let contadorObserver;

function aumentarContador(elemento, valorFinal) {
  let valorAtual = 0;
  let incremento = Math.ceil(valorFinal / 200);

  let animarContador = function() {
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
      let valorFinal = parseInt(entry.target.textContent);
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
