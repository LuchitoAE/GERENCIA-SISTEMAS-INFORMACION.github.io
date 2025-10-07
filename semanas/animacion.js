document.querySelectorAll('.unidad-titulo').forEach(titulo => {
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', () => {
            const lista = titulo.nextElementSibling;
            const icono = titulo.querySelector('.icono-toggle');
            
            if (lista.classList.contains('oculto')) {
                // Expandir
                lista.classList.remove('oculto');
                lista.style.maxHeight = lista.scrollHeight + 'px';
                icono.innerHTML = '&#9660;'; // ▼
            } else {
                // Colapsar
                lista.style.maxHeight = null;
                lista.classList.add('oculto');
                icono.innerHTML = '&#9654;'; // ▶
            }
        });

        // Si no tiene clase 'oculto', expandir por defecto con altura
        const lista = titulo.nextElementSibling;
        if (!lista.classList.contains('oculto')) {
            lista.style.maxHeight = lista.scrollHeight + 'px';
            const icono = titulo.querySelector('.icono-toggle');
            icono.innerHTML = '&#9660;'; // ▼
        }
    });
