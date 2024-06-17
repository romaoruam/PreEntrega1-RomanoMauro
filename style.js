// Valor remera en $(Pesos Argentinos)
const precioRemera = 6500;

// Solicito el ingreso de cantidad de remera de cada tipo
let cantidadRemera1 = parseInt(prompt("Ingrese la cantidad de Remera 1 que desea comprar:"));
let cantidadRemera2 = parseInt(prompt("Ingrese la cantidad de Remera 2 que desea comprar:"));
let cantidadRemera3 = parseInt(prompt("Ingrese la cantidad de Remera 3 que desea comprar:"));

// Validamos que la informacion sea numeros y no negativos
if (isNaN(cantidadRemera1)  || cantidadRemera1 < 0 ||
    isNaN(cantidadRemera2)  || cantidadRemera2 < 0 ||
    isNaN(cantidadRemera3)  || cantidadRemera3 < 0) {
  if (isNaN(cantidadRemera1)) {
    console.error("Error: La cantidad de Remera 1 debe ser un número válido.");
  } else if (cantidadRemera1 < 0) {
    console.error("Error: La cantidad de Remera 1 no puede ser negativa.");
  } 

  if (isNaN(cantidadRemera2)) {
    console.error("Error: La cantidad de Remera 2 debe ser un número válido.");
  } else if (cantidadRemera2 < 0) {
    console.error("Error: La cantidad de Remera 2 no puede ser negativa.");
  }

  if (isNaN(cantidadRemera3)) {
    console.error("Error: La cantidad de Remera 3 debe ser un número válido.");
  } else if (cantidadRemera3 < 0) {
    console.error("Error: La cantidad de Remera 3 no puede ser negativa.");
  }
} else {
  // Calculamos el total sin descuento
  let totalSinDescuento = calcularTotal(cantidadRemera1, cantidadRemera2, cantidadRemera3);
  console.log(`Total sin descuento: ${totalSinDescuento} $(Pesos).`);

  // Aplicamos descuento del 10% si se compran 3 o + remeras
  if (cantidadRemera1 + cantidadRemera2 + cantidadRemera3 >= 3) {
    let totalConDescuento = aplicarDescuento(totalSinDescuento);
    console.log(`Total con descuento del 10%: ${totalConDescuento} $(Pesos).`);
  } else {
    console.log("No se aplica descuento.");
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
