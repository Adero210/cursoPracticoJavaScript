var espacioResultados = document.getElementById("resultados");
var btn = document.getElementById("btn");
btn.addEventListener("click", tomarValores);

// Ejercicio de declarar e inicializar variables
var nombre = "Luis";
var apellido = "Cornejo";
var nombreDeUsuariPlatzi = "nombreDeUsuario";
var edad = 21;
var correoElectronico = "luis@luis.com";
var mayorDeEdad = true;
var dineroAhorrado = 333.12;
var deudas = 202.63;

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

/* Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

var nombreCompleto = `${nombre} ${apellido}`;
var dineroReal = dineroAhorrado - deudas;
espacioResultados.innerHTML += nombreCompleto + "<br>";
espacioResultados.innerHTML += dineroReal + " <br>";

// Funciones 

function tomarValores()
{
    var nameElement = document.getElementById("name");
    var name = nameElement.value;
    var lastNameElement = document.getElementById("lastname");
    var lastname = lastNameElement.value;
    var nicknameElement = document.getElementById("nickname");
    var nickname = nicknameElement.value;

    printNames(name, lastname, nickname);
}

function printNames(name, lastname, nickname)
{
    var completeName = name + " " + lastname;
    console.log("My name is " + completeName + " but I rather "
        + nickname + ".");
    espacioResultados.innerHTML += "My name is " + completeName + " but I rather "
        + nickname + ". <br>"
}

//funciones y condicionales

function condicionPlatzi(suscripcion)
{
    const tipoDeSuscripcion = suscripcion;
    if (tipoDeSuscripcion === "free")
    {
        console.log("Solo puedes tomar los cursos gratis");
    }
    else if (tipoDeSuscripcion === "basic")
    {
        console.log("puedes tomar todos los cursos de platzi" +
            " durante un mes");
    } else if (tipoDeSuscripcion === "expert")
    {
        console.log("puedes tomar todos los cursos de platzi" +
            " durante un año");
    } else if (tipoDeSuscripcion === "expertplus")
    {
        console.log("Tu y alguien más tomar todos los cursos de platzi" +
            " durante todo el año");
    } else {
        console.log("Por que no tienes suscripcion en Platzi")
    }
}

var objFree = {
    type: "free",
    text: "Solo puedes tomar los cursos gratis"
};
var objBasic = {
    type: "basic",
    text: "puedes tomar todos los cursos de platzi durante un mes"
};
var objExpert = {
    type: "expert",
    text: "Tu y alguien más tomar todos los cursos de platzi durante todo el año"
};
var objExpertPlus = {
    type: "expertplus",
    text: "Tu y alguien más tomar todos los cursos de platzi" +
        " durante todo el año"
};

function condicionPlatziArrays(suscripcion)
{
    var arrayTypes = [objFree, objBasic, objExpert, objExpertPlus];
    for (var x of arrayTypes)
    {
        if (suscripcion == x.type)
        {
            console.log(x.text);
        }
    }
}

function whileInstedFor() {
    var i = 0 , j= 10;
    while (i < 5) {
        console.log(`El valor de i es ${i}`);
        i++;
    }
    while (j >= 2)
    {
        console.log(`El valor de j es ${j}`);
        j--;
    }
}

var resultadoSuma = 0;
function suma() {
    resultadoSuma = parseInt(prompt("¿Cuánto es 2 + 2?"));
    while (!(resultadoSuma == 4))
    {
        console.log("no es correcto: "+resultadoSuma);
        suma();
    }
}

function printFirstElementArray(array)
{
    console.log(array[0]);
    espacioResultados.innerHTML += "<br>" + array[0] + "<br>";
}

function printEachElementArray(array)
{
    for (x of array)
    {
        console.log(x);
        espacioResultados.innerHTML += `<br> ${x} <br>`
    }
}

var persona =
{
    nombre: "Luis",
    apellido: "Cornejo",
    edad: 32,
    altura: 143
};

function printElementsObjets(object) {
    /*var atributos = Object.values(object);
    atributos.forEach((x)=>{
        console.log(x);
    })*/

    Object.keys(object).forEach(key => {
        console.log(key, object[key]);
    })
}