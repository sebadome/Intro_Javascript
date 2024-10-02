var precio = 400000;
var cantidad = 0;

// Mostrar el precio base
var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Mostrar la cantidad inicial
var cantidadSpan = document.querySelector(".cantidad");

// Actualizar el total a pagar
var totalSpan = document.querySelector(".valor-total");

var actualizarTotal = () => {
    var total = precio * cantidad;
  totalSpan.innerHTML = total;
};

// Función para incrementar la cantidad
document.getElementById("incrementar").onclick = () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};

// Función para decrementar la cantidad
document.getElementById("decrementar").onclick = () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
};
