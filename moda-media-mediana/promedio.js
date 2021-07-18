//Media aritmetica
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

function calcularMedia() {
    const inputMedia = document.getElementById("input-media");
    const inputLista = inputMedia.value;
    const respuestaP = document.getElementById("resultado-media");
    let lista = inputLista.split(",");
    lista = lista.map(Number)
    const mediaAritmetica = calcularMediaAritmetica(lista);
    respuestaP.innerHTML = "Media aritmetica = " + mediaAritmetica;
}

//Mediana 

function calcularMediana(lista) {
    lista = bubbleSort(lista,lista.length)
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista-1];
    const elemento2 = lista[mitadLista];
    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio
    } else {
        mediana = lista[mitadLista];
    }
    return mediana
}

function esPar(numero)
{
    if (numero % 2 === 0)
    {
        return true;
    }
    else {
        return false;
    }
}

function bubbleSort(lista,listaLength)
{
    let i, j;
    for (i = 0; i < listaLength - 1; i++)
    {
        for (j = 0; j < listaLength - i - 1; j++)
        {
            if (lista[j] > lista[j + 1])
            {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

function getMediana() {
    const inputMediana = document.getElementById("input-mediana");
    const inputLista = inputMediana.value;
    const respuestaP = document.getElementById("resultado-mediana");
    let lista = inputLista.split(",");
    lista = lista.map(Number)
    const mediana = calcularMediana(lista);
    respuestaP.innerHTML = "Mediana = " + mediana;
}
//Moda
function calcularModa(lista)
{
    const listaCount = {}
    lista.map(
        (elemento) => {
            if (listaCount[elemento])
            {
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        (valorAcumulado, nuevoValor) => {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
    
}

function getModa()
{
    const inputModa = document.getElementById("input-moda");
    const inputLista = inputModa.value;
    const respuestaP = document.getElementById("resultado-moda");
    let lista = inputLista.split(",");
    lista = lista.map(Number)
    const moda = calcularModa(lista);
    respuestaP.innerHTML = `La moda es ${moda[0]} que se repite ${moda[1]} veces`
}



