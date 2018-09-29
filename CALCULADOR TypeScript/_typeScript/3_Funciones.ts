
//TODO:>>>>>>>>>>>>>>>>>>>>> FUNCIONES <<<<<<<<<<<<<<<<<<<< 

//__________________________________________________________________________________________________________________________________________________
// INVERTIR CADENA Y INSERTA PUNTO SEPARADOR DE MIL  OK 
function invertir_Cadena(cadena: string): string {

    //VARIABLE LOCAL
    let contador: number = 0;
    let cadena_A: any = cadena;
    let inverti_Text: Array<string> = [];
    let texto_Astring: string = "";

    //INVERTIR ARRAY 
    function reverse() { inverti_Text = cadena_A.split("").reverse(); cadena_A = "" };
    reverse();

    for (const index in inverti_Text) {
        if (contador == 3) {
            cadena_A += ".";
            contador = 0;
        }
        cadena_A += inverti_Text[index];
        contador++;
    }

    //BORRAR DATOS DE VARIABLE  inverti_Text
    inverti_Text = [];

    //LLAMAR FUNCION REVERSE
    reverse();

    //BORRAR DATOS DE VARIABLE
    cadena_A = "";

    //CAMBIAR VARIABLE Y PASAR LA CADENA
    cadena_A = inverti_Text.join();

    //INVERTIR CADENA 
    for (const index in cadena_A) {
        if (!(cadena_A[index] == ",")) {
            texto_Astring += cadena_A[index];
        }
    }
    return texto_Astring;

}

//__________________________________________________________________________________________________________________________________________________
// OPERCACIONES MATEMATICA { datos_1: ?, datos_2: ?, simbolo: "?" } OK   
//datos_1: "2" datos_2: "3" simbolo: "+"
function operacion_Matematica(memoria: operacionMatematica): string {

    let _PositivoNegativo: number = 0;
    let _numero: string = "";

    //__________________________________________
    if (!(isNaN(Number(memoria.datos_1)) && isNaN(Number(memoria.datos_1)))) {

        //__________________________________________
        //VERIFICA SI HAY DATO EN LA VARIABLE SI NO NO PROCESA LA OPERACION
        switch (memoria.simbolo) {
            //>>>>>>>>>> MULTIPLICACION <<<<<<<<<<
            case "*":
                return ((Number(memoria.datos_1) * Number(memoria.datos_2)).toString()).slice(0, 8);
                break;

            //>>>>>>>>>>DIVISION<<<<<<<<<<
            case "/":
                return ((Number(memoria.datos_1) / Number(memoria.datos_2)).toString()).slice(0, 8);
                break;

            //>>>>>>>>>>SUMA<<<<<<<<<<
            case "+":
                return ((Number(memoria.datos_1) + Number(memoria.datos_2)).toString()).slice(0, 8);
                break;

            //>>>>>>>>>>RESTA<<<<<<<<<<
            case "-":
                return ((Number(memoria.datos_1) - Number(memoria.datos_2)).toString()).slice(0, 8);
                break;

            //>>>>>>>>>>RAIZ<<<<<<<<<<
            case "√":
                return ((Math.sqrt(Number(memoria.datos_1)).toFixed(6)).toString()).slice(0, 8);
                break;

            default:
                return "";
                break;
        }
    } else {
        return "";
    }

}

//__________________________________________________________________________________________________________________________________________________
// MEMORIA { memoria_Save: "1 O 2", borrar_Memoria: "1 O 2", datosText: "?" } OK   
function memoria(_memoria: memoriaInterface): any {
    //VERIFICA SI HAY TEXTO datosText

    switch (_memoria.borrarMemoria) {
        //BORRA MEMORIA 1
        case "1":
            memoriaNumero.datos_1 = "";
            break;
        //BORRA MEMORIA 1
        case "2":
            memoriaNumero.datos_2 = "";
            break;
        //DEFAULT
        default:
            _memoria.borrarMemoria = "0";
            break;
    }
    switch (_memoria.tipoMemoriaSave) {
        //GUARDA EN MEMORIA 1
        case "1":
            memoriaNumero.datos_1 = _memoria.datosTexto;
            break;
        //GUARDA EN MEMORIA 2
        case "2":
            memoriaNumero.datos_2 = _memoria.datosTexto;
            break;
        //DEFAULT
        default:

            break;
    }

}

//__________________________________________________________________________________________________________________________________________________
// leyDeSigno("-8+12", "-4")  - + = -   
function leyDeSigno(_texto: string, _resultado: string, _patronCompleto: string) {

    if (existenciaOperador(_patronCompleto) == true) {
        let _suma: boolean = _texto.includes("+");
        let _resta: boolean = _texto.includes("-");
        let _objeto = { _resultadoSigno: "", operadorAdelante: false };
        //_______________________________________________
        if ((_suma == true) && (_resta == true)) {

            let _operador_1: number = _texto.indexOf("-");
            let _operador_2: number = _texto.indexOf("+");
            let _numeroNegativo: number = _resultado.indexOf("-");

            //_______________________________________________
            if (_numeroNegativo == -1) {
                //_____________________________
                if (_operador_2 >= _operador_1) {
                    _objeto = { _resultadoSigno: "+" + _resultado, operadorAdelante: true };
                    return _objeto;
                }
            }
            //_____________________________
            else {

                return _objeto;
            }
        }
        else {
            return _objeto;
        }

    }
}

//BUSCAR SI EXISTEN BARIOS OPERADORES 2 + 4 - 2 *6 / 4 + 10 * 2 false si es ?+? true ?+?-?*?/
function existenciaOperador(texto: string): boolean {

    let _textArray: string[] = texto.split("");
    let _incontrado;
    let _contador: number = 0;

    //______________________________________________________________________________
    _incontrado = _textArray.map((valor, index) => {
        if (isNaN(Number(valor))) {
            if (valor == ".") {

            } else {
                if ((index == 0) && (valor == "-")) {
                }
                else {
                    _contador++
                }
            }
        }
    })

    if (_contador >= 2) {
        MasOperador = true;
        return true
    }
    else {
        MasOperador = false;
        return false
    }


}

//__________________________________________________________________________________________________________________________________________________
//{ _buscarValor: "40/50", _valorRemplazar: "12990", _datosTexto: "10+20-30*40/50" } OK
function remplazar(texto: textoRemplazar): string {
    let _remplazar: string = "";
    let _leyDesigno;
    _remplazar = texto._datosTexto.replace(texto._buscarValor, texto._valorRemplazar);
    //_leyDesigno = leyDeSigno(texto._buscarValor, texto._valorRemplazar);

    return _remplazar;
}

//__________________________________________________________________________________________________________________________________________________
// SACAR EL PATRON DE OPERADOR (?*?) (?/?) (?/?) (?/?) "1+2-3*4/5"  OK
function extraerPatronCadena(texto: extraerPatronCadena) {

    if (existenciaOperador(texto._texto)) {

        //_____________________________________
        let _isNaN: boolean = false;
        let _insertarOperador: boolean = false;
        //_____________________________________
        let _datos = { Texto: texto._texto, PatronOperador: "" }; // ("10+2-5*40/6")
        let _SimboloOperador: string = texto._operador;// (*) (/) (+) (-)
        //_____________________________________
        let _indexOperador = { Simbolo: 0, Inicio: 0, Final: 0 };
        let _separar = { Char: "" }
        let _contador = { Izq: 0, Der: 0, Simbolo: 0 }
        //_____________________________________

        // REGLAS DE PARAMETROS  10+20-50*40/60"
        _indexOperador.Simbolo = _datos.Texto.indexOf(_SimboloOperador);// index 8
        _contador.Izq = _indexOperador.Simbolo;//contador.Izq= 8
        _contador.Der = _indexOperador.Simbolo;//contador.Der= 8
        //_____________________________________

        //CORRER A LA IZQUIERDA CARACTER
        do {
            _contador.Izq--
            _separar.Char = _datos.Texto[_contador.Izq];
            _isNaN = isNaN(Number(_separar.Char));

            if (_isNaN) {
                if (_separar.Char == ".") {
                } else {
                    if (_separar.Char == "-") {
                        _indexOperador.Inicio = _contador.Izq;
                        _insertarOperador = true;
                    } else {
                        _contador.Izq++;
                        _indexOperador.Inicio = _contador.Izq;
                    }
                    break
                }
            }

        } while (true);

        //CORRER A LA DERECHA CARACTER
        do {
            _contador.Der++
            _separar.Char = _datos.Texto[_contador.Der];
            _isNaN = isNaN(Number(_separar.Char));

            if (_isNaN) {
                if (_separar.Char == ".") {
                } else {
                    _indexOperador.Final = _contador.Der;
                    break;
                }
            }

        } while (true);


        //Retornar
        _datos.PatronOperador = _datos.Texto.slice(_indexOperador.Inicio, _indexOperador.Final);

        return _datos.PatronOperador;

    } else {
        return texto._texto;
    }

}

//__________________________________________________________________________________________________________________________________________________
//SEPARAR IZQUIERDO (1) OPERADOR (+) DERECHO (2)  >>> texto = 1+2 operador= +
function separaIzqDer(texto: string, operador: string): { numeroIzq: string, numeroDer: string } {

    //_____________________________________
    let _objeto = { numeroIzq: "", numeroDer: "" };
    let _text: string = texto;

    //_____________________________________
    let _operadorSimbolo: string = operador;
    let _operador: number = 0;
    if (_text.charAt(0) == "-") {
        _operador = _text.lastIndexOf(_operadorSimbolo);
    } else {
        _operador = _text.indexOf(_operadorSimbolo);
    }
    //_____________________________________
    let _charCadena: string = "";

    let _longitudFinal: number = 0;

    //_____________________________________
    let _clonOperador: number = _operador;
    let _numeroIzq: string = _text.slice(0, _operador);
    let _numeroDer: string = "";



    //_____________________________________
    do {
        _clonOperador++;
        _charCadena = _text.charAt(_clonOperador)

        if (isNaN(Number(_charCadena)) || (_charCadena == "")) {

            _numeroDer = _text.substr(_operador + 1, _longitudFinal);
            break

        }
        else {
            _longitudFinal++
        }

    } while (true);

    //_____________________________________________________________
    _objeto = { numeroIzq: _numeroIzq, numeroDer: _numeroDer };
    return _objeto



}

//__________________________________________________________________________________________________________________________________________________

function addClase(id: string) {
    document.getElementById(id)!.classList.add("botonPresionado");
}
function addRemover(id: string) {
    document.getElementById(id)!.classList.remove("botonPresionado");
}