// Valor remera en Pesos Argentinos
const precioRemera = 6500;

// Solicitar nombre y apellido
let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");

// Saludo
console.log ("¡Hola " + nombreUsuario + " " + apellidoUsuario + "! " + "Bienvenido a la tienda Yonkys" );


// Lista de productos
const productos = ["Remera 1", "Remera 2", "Remera 3"];

// Productos seleccionados por el usuario
let productosSeleccionados = [];

// Mostrar opciones de producto y permitir selección
let productoElegido;
do {
  console.log("\nOpciones de productos:");
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i]}`);
  }

  productoElegido = parseInt(prompt("Ingrese el número del producto que desea agregar (o 0 para finalizar): "));

  if (productoElegido > 0 && productoElegido <= productos.length) {
    let cantidadProducto = parseInt(prompt(`Ingrese la cantidad de ${productos[productoElegido - 1]} que desea comprar: `));

    if (isNaN(cantidadProducto) || cantidadProducto < 1) {
      console.error("Error: La cantidad ingresada no es válida.");
    } else {
      productosSeleccionados.push({ producto: productos[productoElegido - 1], cantidad: cantidadProducto });
    }
  }
} while (productoElegido > 0);

// Mostrar resumen de productos seleccionados
console.log("\nResumen de productos seleccionados:");
for (let producto of productosSeleccionados) {
  console.log(`${producto.producto}: ${producto.cantidad} unidades`);
}

// Cálculo del total (asumiendo que se aplica el descuento por producto)
let totalSinDescuento = 0;
for (let producto of productosSeleccionados) {
  totalSinDescuento += producto.cantidad * precioRemera;
}

console.log(`Total sin descuento: ${totalSinDescuento} pesos argentinos.`);

// Aplicar descuento del 10% si se compran 3 o más remeras en total (asumiendo descuento por producto)
let cantidadTotalRemeras = 0;
for (let producto of productosSeleccionados) {
  cantidadTotalRemeras += producto.cantidad;
}

if (cantidadTotalRemeras >= 3) {
  let totalConDescuento = aplicarDescuento(totalSinDescuento);
  console.log(`Total con descuento del 10%: ${totalConDescuento} pesos argentinos.`);
} else {
  console.log("No se aplica descuento.");
}

// Función para calcular el total sin descuento
function calcularTotal(cantidad1, cantidad2, cantidad3) {
  return (cantidad1 + cantidad2 + cantidad3) * precioRemera;
}

// Función para aplicar descuento del 10%
function aplicarDescuento(total) {
  return total * 0.9; // Descuento del 10%
}
