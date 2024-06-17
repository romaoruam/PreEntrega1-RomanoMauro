// Valor remera en Pesos Argentinos
const precioRemera = 6500;

// Solicitar nombre y apellido
let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");

// Generar saludo
let saludo = `¡Hola ${nombreUsuario} ${apellidoUsuario}! Bienvenido a nuestra tienda.`;
console.log(saludo);

// Lista de productos
const productos = ["Remera 1", "Remera 2", "Remera 3"];

// Mostrar opciones de producto
console.log("\nOpciones de productos:");
for (let i = 0; i < productos.length; i++) {
  console.log(`${i + 1}. ${productos[i]}`);
}

// Solicitar selección de producto
let productoElegido = parseInt(prompt("Ingrese el número del producto que desea comprar: "));

// Validar selección de producto
if (isNaN(productoElegido) || productoElegido < 1 || productoElegido > productos.length) {
  console.error("Error: El número de producto ingresado no es válido.");
} else {
  // Mostrar información del producto seleccionado
  let productoSeleccionado = productos[productoElegido - 1];
  console.log(`\nProducto seleccionado: ${productoSeleccionado}`);

  // Solicitar cantidad del producto seleccionado
  let cantidadProducto = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado} que desea comprar: `));

  // Validar cantidad del producto seleccionado
  if (isNaN(cantidadProducto) || cantidadProducto < 1) {
    console.error("Error: La cantidad ingresada no es válida.");
  } else {
    // Calcular total sin descuento
    let totalSinDescuento = cantidadProducto * precioRemera;
    console.log(`Total sin descuento: ${totalSinDescuento} pesos argentinos.`);

    // Aplicar descuento del 10% si se compran 3 o más remeras
    if (cantidadProducto >= 3) {
      let totalConDescuento = aplicarDescuento(totalSinDescuento);
      console.log(`Total con descuento del 10%: ${totalConDescuento} pesos argentinos.`);
    } else {
      console.log("No se aplica descuento.");
    }
  }
}

// Función para calcular el total sin descuento
function calcularTotal(cantidad1, cantidad2, cantidad3) {
  return (cantidad1 + cantidad2 + cantidad3) * precioRemera;
}

// Función para aplicar descuento del 10%
function aplicarDescuento(total) {
  return total * 0.9; // Descuento del 10%
}
