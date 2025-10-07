// script.js - Toggle genérico para unidades en todas las semanas
// Compatible con CSS de semanas.css (transiciones, !important en .oculto, etc.)
document.addEventListener('DOMContentLoaded', () => {
    const unidades = document.querySelectorAll('.unidad-titulo');
    unidades.forEach(titulo => {
        const lista = titulo.nextElementSibling;
        const icono = titulo.querySelector('.icono-toggle');

        // Función para configurar estado inicial del icono
        function setInitialState() {
            const computedStyle = window.getComputedStyle(lista);
            const isExpanded = computedStyle.maxHeight !== '0px';
            if (isExpanded) {
                icono.style.transform = 'rotate(90deg)';
            } else {
                icono.style.transform = 'rotate(0deg)';
            }
        }
        setInitialState();

        titulo.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(lista);
            const isExpanded = computedStyle.maxHeight !== '0px';

            if (isExpanded) {
                // Colapsar: Usar inline para sobrescribir CSS y animar a 0
                lista.style.maxHeight = '0px';
                lista.style.paddingTop = '0px';
                lista.style.paddingBottom = '0px';
                lista.style.borderTop = 'none';
                icono.style.transform = 'rotate(0deg)';

                // Después de la transición (0.4s del CSS), limpiar TODOS los inline styles
                // para que .temas-lista y .oculto tomen control (mantiene colapsado)
                setTimeout(() => {
                    lista.style.maxHeight = '';
                    lista.style.paddingTop = '';
                    lista.style.paddingBottom = '';
                    lista.style.borderTop = '';
                }, 400);
            } else {
                // Expandir: Primero resetear inline a 0 (sobrescribe !important), luego expandir
                lista.style.maxHeight = '0px';
                lista.style.paddingTop = '0px';
                lista.style.paddingBottom = '0px';
                lista.style.borderTop = 'none';

                // Pequeño delay para que el reset tome efecto y calcule scrollHeight correctamente
                setTimeout(() => {
                    const scrollHeight = lista.scrollHeight + 30; // +30px aprox. para paddings (ajusta si necesario)
                    lista.style.maxHeight = scrollHeight + 'px';
                    // Aplicar paddings y border inline para sobrescribir .oculto !important y mostrar contenido
                    lista.style.paddingTop = '15px';
                    lista.style.paddingBottom = '15px';
                    lista.style.borderTop = '1px solid #e1e4e8';
                    icono.style.transform = 'rotate(90deg)';
                }, 10);
            }
        });
    });
});
