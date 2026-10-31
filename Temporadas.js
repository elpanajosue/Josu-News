(() => {
  "use strict";

  function actualizarTemporada() {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    let temporada = "normal";

    if (mes === 10 && dia >= 25 && dia <= 31) {
      temporada = "halloween";
    } else if (mes === 12 && (dia === 7 || dia === 8)) {
      temporada = "velitas";
    } else if (mes === 12 && dia >= 16 && dia <= 25) {
      temporada = "navidad";
    }

    document.body.dataset.temporada = temporada;
    // Decoraciones especiales de cada temporada
    document.querySelectorAll(".decoracion-especial").forEach(el => el.remove());

    function crearDecoracion(clase, contenido, posicion) {
      const elemento = document.createElement("div");
      elemento.className = `decoracion-especial ${clase} ${posicion}`;
      elemento.setAttribute("aria-hidden", "true");
      elemento.textContent = contenido;
      document.body.appendChild(elemento);
    }

    if (temporada === "halloween") {
      crearDecoracion("telarana", "🕸️", "esquina-superior-izquierda");
      crearDecoracion("telarana", "🕸️", "esquina-superior-derecha");
      crearDecoracion("calabaza", "🎃", "lado-izquierdo");
      crearDecoracion("calabaza", "🎃", "lado-derecho");
      crearDecoracion("murcielago", "🦇", "volador-uno");
      crearDecoracion("murcielago", "🦇", "volador-dos");
    }

    if (temporada === "velitas") {
      crearDecoracion("velita", "🕯️", "esquina-inferior-izquierda");
      crearDecoracion("velita", "🕯️", "esquina-inferior-derecha");
    }

    if (temporada === "navidad") {
      crearDecoracion("nieve", "❄", "nieve-uno");
      crearDecoracion("nieve", "❄", "nieve-dos");
      crearDecoracion("nieve", "❄", "nieve-tres");
      crearDecoracion("rama-navidad", "🎄", "esquina-inferior-izquierda");
      crearDecoracion("rama-navidad", "🎄", "esquina-inferior-derecha");
    }

    document.querySelectorAll(".adorno-temporada").forEach(el => el.remove());

    const temas = {
      halloween: { simbolos: ["✦", "☾", "✧", "♠"], cantidad: 12 },
      velitas: { simbolos: ["✦", "🕯", "✧"], cantidad: 10 },
      navidad: { simbolos: ["✦", "❄", "★"], cantidad: 12 }
    };

    const tema = temas[temporada];
    if (!tema) return;

    for (let i = 0; i < tema.cantidad; i++) {
      const adorno = document.createElement("span");
      adorno.className = "adorno-temporada";
      adorno.setAttribute("aria-hidden", "true");
      adorno.textContent = tema.simbolos[i % tema.simbolos.length];
      adorno.style.left = `${(i * 37 + 9) % 100}%`;
      adorno.style.animationDelay = `${(i % 6) * -1.7}s`;
      adorno.style.animationDuration = `${8 + (i % 5)}s`;
      document.body.appendChild(adorno);
    }
  }

  function iniciar() {
    actualizarTemporada();

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) actualizarTemporada();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar, { once: true });
  } else {
    iniciar();
  }
})();
