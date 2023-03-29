
num=5;
//var num2=prompt("digite el numero:");
var nombre="pedro"
let bandera=true;

console.log(num);
console.log(nombre);
console.log(bandera);

if(5>3){
    
    /*
    let = variables en su scope=ambito
    var = variables globales
    */

    let edad=50
    console.log(edad);
}
/*no va a imprimir edad porque solo esta dentro del if*/
/*console.log(edad);*/

/*tipos
string
number
boolean
vectores
listas=arrays
objetos
*/

//=== valida el tipo y el valor de la variable
// valida primero el tipo, luego el valor
if(5==="5"){
    console.log("entro")
    //no imprime porque no son el mismo tipo, numerico y string
}

const persona={
    cedula:604,
    nombre:"pedro",
    apellido1:"guevara",
    edad:50,
    //apellido2:"ramirez"
}

console.log(persona);

//hasOwnPropery determina si existen propiedas en los objetos
//en el siguiente ejemplo dara true porque el objeto persona
//si tiene la propiedad apellido1, en cambio, si pongo apellido2 dara false
var tiempoApellido=persona.hasOwnProperty("apellido1");
console.log(tiempoApellido)


//imprime el valor de un valor de un objeto existente
console.log(persona.apellido1);


//validar si existe el apellido2 dentro del objeto
if(persona.apellido2){
    console.log("el apellido 2 es: "+persona.apellido2);
}else{
    console.log("no tiene apellido 2");
}


//CONCATENAR + , STRING TEMPLATE
//alt 96
const mensaje=`el mensaje es, el nombre de la persona es: ${nombre}, y la edad es ${persona.edad}`;

console.log(mensaje);


//spreed=... en el console.log antes de imprimir el valor, no recorre
//la lista, sino que imprime los valores como valores comunes
const lista=["rojo","azul","verde","amarillo"]
console.log(lista);

//imprimir por posicion
console.log(lista[2]);

//imprime los valores de la lista lista, e imprime la posicion en la que se encuentran
//valor value y posicion index
//los nombres value e index se pueden cambiar por cualquier nombre
lista.forEach((value, index)=>{
    const mensaje=`el color es: ${value}, en la posicion ${index}`
    console.log(mensaje);
    }
);


lista.map((value,index)=>{
    if(value=="rojo"){
        console.log("si es rojo")
    }else{
        console.log(`no, es color ${value}`)
    }
    }
);

const listaPersonas=[
    {
        cedula:1,
        nombre:"pedro",
        apellido1:"guevara",
        edad:40,
        //apellido2:"ramirez"
    },
    {
        cedula:2,
        nombre:"maria",
        apellido1:"azofeifa",
        edad:50,
        //apellido2:"ramirez"
    },
    {
        cedula:3,
        nombre:"gayson",
        apellido1:"joyan",
        edad:90,
        //apellido2:"ramirez"
    },
    {
        cedula:4,
        nombre:"julian",
        apellido1:"martinez",
        edad:20,
        //apellido2:"ramirez"
    },
    {
        cedula:5,
        nombre:"racheñ",
        apellido1:"carrillo",
        edad:19,
        //apellido2:"ramirez"
    }
]

const results=listaPersonas.map((persona,index)=>{
    const nombre=`${persona.nombre} ${persona.apellido1}`;
    return{
        id:index,
        nombreCompleto:nombre,
        edad:persona.edad,
        cedula:persona.cedula,
    }
    }
).filter(x=>x.edad>30);
//.filter y find es para meter una condicion, en este caso,
//solo imprimir personas con mas de 30 años

console.log(...results)


/*while(edad>49){
    edad=15;
}*/

function calcular(num1,num2){
    return num1+num2;
}

console.log(calcular(5,91))