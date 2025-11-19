/* =========================================================
   ANIMACIONES PROFESIONALES PARA EL SITIO
   ========================================================= */

// Activar animaciones con IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {

    // Elementos que se animarán al aparecer en pantalla
    const animatedElements = document.querySelectorAll(
        ".section, .unidad, .info-card, .cta, .hero-content"
    );

    // Opciones del observador
    const observerOptions = {
        threshold: 0.2
    };

    // Función observadora
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicación del observador
    animatedElements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});



/* =========================================================
   SMOOTH SCROLL PARA ENLACES INTERNOS
   ========================================================= */

document.addEventListener("click", (e) => {
    if (e.target.matches("a[href^='#']")) {
        e.preventDefault();
        const targetID = e.target.getAttribute("href");
        const target = document.querySelector(targetID);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    }
});


/* =========================================================
   EFECTO PEQUEÑO EN BOTONES (CLICK SCALE)
   ========================================================= */

document.addEventListener("mousedown", (e) => {
    if (e.target.matches(".btn-primary, .btn-secondary")) {
        e.target.style.transform = "scale(0.95)";
    }
});

document.addEventListener("mouseup", (e) => {
    if (e.target.matches(".btn-primary, .btn-secondary")) {
        e.target.style.transform = "scale(1)";
    }
});


/* =========================================================
   LOG DE VERIFICACIÓN
   ========================================================= */

console.log("Animaciones activadas correctamente.");
