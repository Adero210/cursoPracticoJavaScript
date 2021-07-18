const btnCalcular = document.getElementById("btn-ende");
btnCalcular.addEventListener("click", calcularCapacidadDeEndeudamiento);


function calcularCapacidadDeEndeudamiento()
{
    const resParrafo = document.getElementById("res-ende");
    const inputIngresosTotales = document.getElementById("ingreso-totales");
    const ingresosTotales = inputIngresosTotales.valueAsNumber;
    const inputGastosTotales = document.getElementById("gastos-totales");
    const gastosTotales = inputGastosTotales.valueAsNumber;
    const ingresosNetos = calcularIngresoNeto(ingresosTotales, gastosTotales);
    const capacidadEnde = calcularEndeudamiento(ingresosNetos);
    resParrafo.innerText = `Ingresos netos: $ ${ingresosNetos}
    Capacidad de endeudamiento : $ ${capacidadEnde}
    con un porcentaje del 40%`;

}

function calcularIngresoNeto(ingresosTotales, gastosTotales)
{
    return ingresosTotales - gastosTotales;
}

function calcularEndeudamiento(ingresosNetos)
{
    return ingresosNetos * 0.40;
}
