function Registrado() {
  const datos = obtenerDatos();

  if (!validarFormulario(datos)) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor completa todos los campos.",
      confirmButtonColor: "#0D6EFD",
    });
    return;
  }

  // Mostrar datos enviados
  Swal.fire({
    icon: "success",
    title: "Datos enviados correctamente",
    confirmButtonColor: "#0D6EFD",
    html: `
            <strong>Nombre:</strong> ${datos.nombre}<br>
            <strong>Apellido:</strong> ${datos.apellido}<br>
            <strong>Correo:</strong> ${datos.correo}<br>
            <strong>Teléfono:</strong> ${datos.telefono}<br>
            <strong>Empresa:</strong> ${datos.empresa}<br>
            <strong>Comentario:</strong> ${datos.comentario}
        `,
  });

  console.log("--------------* Datos recibidos: *--------------");
  console.log("Nombre:", datos.nombre);
  console.log("Apellido:", datos.apellido);
  console.log("Correo:", datos.correo);
  console.log("Teléfono:", datos.telefono);
  console.log("Empresa:", datos.empresa);
  console.log("Comentario:", datos.comentario);
  console.log("-------------------------------------------------");
}
