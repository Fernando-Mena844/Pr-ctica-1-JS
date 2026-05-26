//El punto de partida del programa es el botón de "Calcular precios"
//Paso 1: Controlamos el botón de calcular precios usando JS.
const btnCalcular = document.getElementById("btnCalcular");
//Paso 2: Agregar un event listener para cuando se haga click en el botón de calcular
btnCalcular.addEventListener("click", function(e){
    //Paso 3: Evitar que el formulario se envíe y que se recargue la página
    e.preventDefault();

    //Paso 4: obtener los valores ingresados por el usuario
    const nombreProducto = document.getElementById("nombre").value;
    const precioProducto = parseFloat(document.getElementById("precio").value)||0;
    const cantidadProducto = parseInt(document.getElementById("cantidad").value)||0;
    const descuentoProducto = parseFloat(document.getElementById("descuento").value)||0;
    const opcionIva = document.getElementById("iva").value;
    let valorIva;
    //Paso 5: Obtener valor del IVA
    if (opcionIva == 1){
        valorIva=13
    }
    else{
        valorIva=0
    }

    //6) Calcular todo
    const subtotal = precioProducto * cantidadProducto;
    const descuento = subtotal * (descuentoProducto/100);
    const precioConDescuento = subtotal - descuento;
    const precioIva = precioConDescuento * (valorIva/100);
    const valorFinal = precioConDescuento + precioIva;

    //7) Mostrar precio al usuario
    document.getElementById("precioOriginal").textContent="$"+subtotal.toFixed(2);
    document.getElementById("valorIVA").textContent="$"+precioIva.toFixed(2);
    document.getElementById("valorDescuento").textContent="$"+descuento.toFixed(2);
    document.getElementById("precioFinal").textContent="$"+valorFinal.toFixed(2);

    //Paso 8: Retirar la clase "d-none" para mostrar resultado
    document.getElementById("resultado").classList.remove(d-none);
});