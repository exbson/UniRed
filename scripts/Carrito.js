let carrito = [];  // Arreglo con productos agregados

function addToCart(id) {
  const producto = findProductById(id);

  if (!producto) {
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "Producto no encontrado",
      confirmButtonColor: "#007bff"
    });
  }

  // Clonar el producto para evitar referencias repetidas
  const productoClonado = { ...producto };

  // Agregar SIEMPRE (aunque sea el mismo producto)
  carrito.push(productoClonado);

  Swal.fire({
    icon: "success",
    title: "Agregado",
    text: `${producto.name} fue agregado al carrito`,
    showConfirmButton: false,
    timer: 1500
  });

  console.log("Carrito actual:", carrito);

  // Verificar si ya hay 5 productos (contando repetidos)
  if (carrito.length === 5) {

    Swal.fire({
      icon: "info",
      title: "¡Carrito lleno!",
      text: "Has agregado 5 productos.",
      confirmButtonColor: "#007bff"
    }).then(() => {
      
      // 🔥 Reiniciar el carrito después de cerrar la alerta
      carrito = [];
      console.clear();
      console.log("Carrito reiniciado:", carrito);

    });

  }
}
