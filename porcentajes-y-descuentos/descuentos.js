// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function onClickButtonPriceDescount()
{
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.valueAsNumber;
    const inputDesc = document.getElementById("input-desc");
    const descValue = inputDesc.valueAsNumber;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descValue);

    const resultP = document.getElementById("result-price");
    resultP.innerText = "Precio final: " + precioConDescuento;
}

const codigos = [
    {
        codigo: "luisPlus",
        value: 15
    },
    {
        codigo: "platzide",
        value: 20
    },
    {
        codigo: "lara",
        value: 35
    }
]

function onClickButtonPriceDescountWithCode()
{
    const inputCodigo = document.getElementById("input-codigo");
    const codigo = inputCodigo.value;
    const inputPrice = document.getElementById("input-price-2");
    const priceValue = inputPrice.valueAsNumber;
    const inputDesc = document.getElementById("input-desc-2");
    const resultP = document.getElementById("result-price-2");

    const codigoValidado = validarCodigo(codigo);
    if (codigoValidado.validado)
    {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, codigoValidado.value);
        inputDesc.value = codigoValidado.value;
        resultP.innerText = "Precio final: " + precioConDescuento;
    }
    else
    {
        inputDesc.value = codigoValidado.value;
        resultP.innerText = "Código no valido";
    }
}

function validarCodigo(codigo)
{
    for (var x of codigos)
    {
        if (x.codigo == codigo)
        {
            return { validado: true, value: x.value };
        }
    }
    return { validado: false, value: 0 };
}