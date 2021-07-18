//Helpers 
function esPar(numero)
{
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista)
{
    //let sumaLista = 0;
    // for (let i = 0; i < lista.length;i++)
    // {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Crear un nuevo array con solo los salarios 
const salarioColombia = colombia.map(
    (persona) => {
        return persona.salary;
    }
);
//Ordenar el aaray de salarios
const salarioColSorted = salarioColombia.sort((salaryA, salaryB) => {
    return salaryA - salaryB;
})

//Calcular la mediana 

function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length))
    {
        const mitadPersona1 = lista[mitad-1];
        const mitadPersona2 = lista[mitad];
        const mediana = calcularMediaAritmetica([mitadPersona1, mitadPersona2]);
        return mediana;
    }
    else {
        const mitadPersona = lista[mitad];
        return mitadPersona;
    }
}

//  Mediana general
const medianaGeneralCol = medianaSalarios(salarioColSorted);

//Mediana top 10%
const spliceStart = (salarioColSorted.length*(100-10))/100;
const spliceCount = (salarioColSorted.length - spliceStart);
const salariosCol10Top = salarioColSorted.splice(spliceStart, spliceCount);

const medianaCol10Top = medianaSalarios(salariosCol10Top);


console.log({
    medianaGeneralCol,
    medianaCol10Top
});