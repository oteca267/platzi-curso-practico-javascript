// const precioOriginal = 120;
// const descuento = 1;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento
}

function onClickButtomPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "Elprecio con descuento son: $" + precioConDescuento;
}





// console.log("El precio original es " + precioOriginal)
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })