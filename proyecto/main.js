class Persona{
    static contadorPersonas = 0;
    constructor(nombre,apellido, edad, salario){
        this._idPersonas =++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._salario = salario;
    }
    get idPersonas(){
        return this._idPersonas
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
    
}

const personas = [];

function mostrarPersonas(){
    let texto= "";
    for(let persona of personas){
        texto += `${persona.idPersonas} ${persona.nombre} ${persona.apellido} ${persona.edad} ${persona.salario}
        <br>`
    }
    document.getElementById("lista").innerHTML= texto;
}

function agregarPersonas(){
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let edad = document.getElementById("edad").value;
let salario = document.getElementById("salario").value;

let persona = new Persona(nombre,apellido,edad,salario)
personas.push(persona); 

mostrarPersonas();
}

function cambiarImagen(){
    document.getElementById("payaso").src="/imagenes/fantasma.jpg"
}

function cambiarImagen1(){
document.getElementById("payaso2").src="/imagenes/moustro.jpg"
}