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
