// Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadarado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("perimetro cuadrado: " + perimetroCuadrado + " cm");

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("área cuadrado: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triangulo 
console.group("Trinagulos");
const ladoTrinagulo1 = 6;
const ladoTrinagulo2 = 6;
const baseTrinagulo = 4;
const alturaTriangulo = 5.5;

console.log(
    `Los lados del triagulo son:
    ${ladoTrinagulo1} cm
    ${ladoTrinagulo2} cm 
    ${baseTrinagulo} cm`)
console.log("Altura trianglo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTrinagulo2 +
    ladoTrinagulo1 + baseTrinagulo;
console.log("Perimetro trianglo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTrinagulo * alturaTriangulo) / 2;
console.log("Área trianglo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código Circulos
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = 2 * radioCirculo;
const PI = Math.PI;
console.log("pi " + PI)
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (Math.pow(radioCirculo, 2) * PI);

console.log("Perimetro Circulo es: " + perimetroCirculo.toFixed(3) + " cm");
console.log("Área Circulo es: " + areaCirculo.toFixed(3) + " cm^2");


console.groupEnd();