// Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadarado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}  

function areaCuadrado(ladoCuadrado)
{
    return Math.pow(ladoCuadrado, 2);
}
console.groupEnd();

// Código del triangulo 
console.group("Trinagulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();

//Código Circulos
console.group("Circulos");
function diametroCirculo(radio) {
    return 2 * radio;
}
const PI = Math.PI;

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio)
{
    return (Math.pow(radio, 2) * PI);
}
console.groupEnd();

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("input-cuadrado");
    const lado = input.valueAsNumber;
    const perimetro = perimetroCuadrado(lado);
    mostrarRsultado(perimetro, "cm", "cuadrado");
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("input-cuadrado");
    const lado = input.valueAsNumber;
    const area = areaCuadrado(lado);
    mostrarRsultado(area, "cm^2", "cuadrado");
}

function calcularPerimetroTriangulo()
{
    const inputLado1 = document.getElementById("input-triangulo-lado1");
    const inputLado2 = document.getElementById("input-triangulo-lado2");
    const inputBase = document.getElementById("input-triangulo-base");

    const lado1 = inputLado1.valueAsNumber;
    const lado2 = inputLado2.valueAsNumber;
    const base = inputBase.valueAsNumber;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    mostrarRsultado(perimetro, "cm", "triangulo");

}

function calcularAreaTriangulo()
{
    const inputLado1 = document.getElementById("input-triangulo-lado1");
    const inputLado2 = document.getElementById("input-triangulo-lado2");
    const inputBase = document.getElementById("input-triangulo-base");

    const lado1 = inputLado1.valueAsNumber;
    const lado2 = inputLado2.valueAsNumber;
    const base = inputBase.valueAsNumber;

    const altura = calcularAlturaTriangulo(lado1, lado2, base);
    
    const area = areaTriangulo(base, altura);
    mostrarRsultado(area.toFixed(2), "cm^2", "triangulo");
}

function calcularAlturaTriangulo(lado1,lado2,base)
{
    const inputAltura = document.getElementById("input-triangulo-altura");
    if (lado1 === lado2 && lado1 != base)
    {
        const altura = Math.sqrt((Math.pow(lado1, 2) - ((Math.pow(base, 2))/4)));
        inputAltura.value = altura.toFixed(3);
        return altura;
    }
    else
    {
        alert("No es un triangulo isoceles")
        return 0;
    }
}

function calcularPerimetroCirculo()
{
    const inputRadio = document.getElementById("input-circulo-radio");
    const inputDiametro = document.getElementById("input-circulo-diametro");
    const radio = inputRadio.valueAsNumber;
    const diametro = diametroCirculo(radio);
    const perimetro = perimetroCirculo(radio);

    inputDiametro.value = diametro;
    mostrarRsultado(perimetro.toFixed(3), "cm", "circulo");
}

function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("input-circulo-radio");
    const inputDiametro = document.getElementById("input-circulo-diametro");
    const radio = inputRadio.valueAsNumber;
    const diametro = diametroCirculo(radio);
    const area = areaCirculo(radio);
    
    inputDiametro.value = diametro;
    mostrarRsultado(area.toFixed(2), "cm^2", "circulo");
}

function mostrarRsultado(value, medida, figura)
{
    const input = document.getElementById("respuesta-"+figura);
    input.value = `${value} ${medida}`;
}