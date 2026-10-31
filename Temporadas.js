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
    // Decoraciones estáticas en las esquinas
    document.querySelectorAll(".decoracion-especial").forEach(el => el.remove());

    function crearDecoracion(clase, contenido, posicion) {
      const elemento = document.createElement("div");
      elemento.className = `decoracion-especial ${clase} ${posicion}`;
      elemento.setAttribute("aria-hidden", "true");
      elemento.textContent = contenido;
      document.body.appendChild(elemento);
    }

    if (temporada === "halloween") {
      crearDecoracion("telarana", "🕸", "esquina-superior-izquierda");
      crearDecoracion("telarana", "🕸", "esquina-superior-derecha");
      crearDecoracion("calabaza", "🎃", "esquina-inferior-izquierda");
      crearDecoracion("calabaza", "🎃", "esquina-inferior-derecha");
    }

    if (temporada === "velitas") {
      crearDecoracion("velita", "🕯", "esquina-inferior-izquierda");
      crearDecoracion("velita", "🕯", "esquina-inferior-derecha");
    }

    if (temporada === "navidad") {
      crearDecoracion("estrella", "✦", "esquina-superior-izquierda");
      crearDecoracion("estrella", "✦", "esquina-superior-derecha");
      crearDecoracion("rama-navidad", "🎄", "esquina-inferior-izquierda");
      crearDecoracion("rama-navidad", "🎄", "esquina-inferior-derecha");
    }
