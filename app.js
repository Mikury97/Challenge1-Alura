// Array que almacenará los nombres de los amigos ingresados
let amigos = [];

// Función para agregar el nombre a la lista
function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nombre = amigoInput.value.trim();

  // Verifica si el nombre no está vacío
  if (nombre === "") {
    // Alerta si el campo está vacío
    alert("Por favor ingresa un nombre válido.");
  } else if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido ingresado. Por favor, ingresa otro nombre.");
    // Alerta si el nombre ya existe
  } else {
    // Agrega el nombre al array
    amigos.push(nombre);
    // Actualiza la lista visible en la página
    actualizarLista();
    // Limpia el campo de entrada
    amigoInput.value = "";
  }
}
