function registador() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);

  alert(`Datos enviados:\nNombre: ${nombre}\nEmail: ${email}`);
}
