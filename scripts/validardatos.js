function validarFormulario(datos) {
    return (
        datos.nombre &&
        datos.apellido &&
        datos.correo &&
        datos.telefono &&
        datos.empresa &&
        datos.comentario
    );
}
