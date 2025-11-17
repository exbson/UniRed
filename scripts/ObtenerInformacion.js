function obtenerDatos() {
    const formulario = document.getElementById("contacto");

    return {
        nombre: formulario.querySelector('input[placeholder="Ej: Maria"]').value.trim(),
        apellido: formulario.querySelector('input[placeholder="Ej: Moreno"]').value.trim(),
        correo: formulario.querySelector('input[placeholder="maria_moreno@ejemplo.com"]').value.trim(),
        telefono: formulario.querySelector('input[placeholder="+57 3115923283"]').value.trim(),
        empresa: formulario.querySelector('input[placeholder="Tecno & Asociados"]').value.trim(),
        comentario: document.getElementById("mensaje").value.trim()
    };
}
