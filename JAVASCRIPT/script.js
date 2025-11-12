// ===============================
// ANIMACIÓN DE ENTRADA DE SERVICIOS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const servicios = document.querySelectorAll(".servicio");

  servicios.forEach((item, index) => {
    // Estado inicial invisible y desplazado
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";

    // Animación secuencial
    setTimeout(() => {
      item.style.transition = "all 0.8s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 150 * index);
  });

  // ===============================
  // BOTÓN DE CONTACTO
  // ===============================
  const boton = document.getElementById("btn-contacto");

  // Verifica que el botón exista antes de asignar el evento
  if (boton) {
    boton.addEventListener("click", () => {
      alert("Gracias por su interés. Será redirigido a la página de contacto.");
      window.location.href = "contacto.html"; 
      // 🔹 Ajusta la ruta según tu estructura de carpetas.
      // Si está en otra carpeta, usa algo como "../Contacto/contacto.html"
    });
  }
});

