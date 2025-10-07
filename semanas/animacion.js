document.querySelectorAll('.unidad-titulo').forEach(titulo => {
        titulo.style.cursor = 'pointer';

        titulo.addEventListener('click', () => {
            const lista = titulo.nextElementSibling;
            const icono = titulo.querySelector('.icono-toggle');

            const estaOculta = lista.classList.contains('oculto');

            if (estaOculta) {
                // Expandir
                lista.classList.remove('oculto');
                lista.style.maxHeight = lista.scrollHeight + 'px';
                icono.innerHTML = '&#9660;'; // ▼
            } else {
                // Colapsar
                lista.style.maxHeight = '0';
                lista.classList.add('oculto');
                icono.innerHTML = '&#9654;'; // ▶
            }
        });

        // Si no está oculta al cargar, inicializa el max-height
        const lista = titulo.nextElementSibling;
        const icono = titulo.querySelector('.icono-toggle');
        if (!lista.classList.contains('oculto')) {
            lista.style.maxHeight = lista.scrollHeight + 'px';
            icono.innerHTML = '&#9660;'; // ▼
        }
    });
