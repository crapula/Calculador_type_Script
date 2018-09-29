
let puntoUnaVez: Boolean = true;
let limpiarDisplay: boolean = false;
let MasOperador: boolean = false;
let signo: boolean = true;

//_________________________________________________ 
let simbolo = {
    operador: "",
    otros: "",
    contador: 0,
    raiz: false

};

//_________________________________________________
let memoriaNumero = {
    datos_1: "",
    datos_2: "",
    GuarDatos: "",
    Longitud: 0,
    guarDatos_1: false,
    guarDatos_2: false,

};

//_________________________________________________
let pantalla = {
    foco: false
}

//_________________________________________________
let contador = {
    multiplicacion: 0,
    division: 0,
    suma: 0,
    resta: 0
}

//_________________________________________________
interface memoriaInterface {
    datosTexto: string,        //OBLIGATORIO PARAMETRO
    tipoMemoriaSave: string,   //OBLIGATORIO PARAMETRO
    borrarMemoria: string   //OBLIGATORIO PARAMETRO
}

//_________________________________________________
interface operacionMatematica {
    datos_1: string,
    datos_2: string,
    simbolo: string


}

//_________________________________________________
interface textoRemplazar {
    _datosTexto: string,
    _buscarValor: string,
    _valorRemplazar: string
}

//_________________________________________________
interface extraerPatronCadena {
    _texto: string,
    _operador: string

}