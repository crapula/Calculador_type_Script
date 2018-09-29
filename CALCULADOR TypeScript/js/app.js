"use strict";
let puntoUnaVez = true;
let limpiarDisplay = false;
let MasOperador = false;
let signo = true;
let simbolo = {
    operador: "",
    otros: "",
    contador: 0,
    raiz: false
};
let memoriaNumero = {
    datos_1: "",
    datos_2: "",
    GuarDatos: "",
    Longitud: 0,
    guarDatos_1: false,
    guarDatos_2: false,
};
let pantalla = {
    foco: false
};
let contador = {
    multiplicacion: 0,
    division: 0,
    suma: 0,
    resta: 0
};
class _display {
    constructor() {
        this.leerTexto = () => document.getElementById("display").textContent;
    }
    imprimir(texto, punto = false) {
        let _textoLogitud;
        let _textContent;
        let _bucarSigno = "";
        let _signoNegativoText;
        if (!(isNaN(Number(texto))) || (texto == ".")) {
            _textoLogitud = document.getElementById("display").textContent.length;
            if (_textoLogitud <= 7) {
                if (texto == ".") {
                    if (puntoUnaVez == true) {
                        puntoUnaVez = false;
                        document.getElementById("display").innerHTML += texto;
                    }
                }
                else {
                    _textContent = document.getElementById("display").textContent;
                    if (_textContent == "0") {
                        document.getElementById("display").innerHTML = "";
                    }
                    document.getElementById("display").innerHTML += texto;
                    pantalla.foco = true;
                }
            }
        }
        else {
            if ((texto == "+/-")) {
                if (signo == true) {
                    _textContent = document.getElementById("display").textContent;
                    if (_textContent !== "0") {
                        _bucarSigno = _textContent.charAt(0);
                        _textoLogitud = _textContent.length;
                        _textContent = _textContent = document.getElementById("display").textContent;
                        if (_bucarSigno == "-") {
                            document.getElementById("display").innerHTML = _textContent.substr(1, _textoLogitud);
                        }
                        else {
                            document.getElementById("display").innerHTML = "-" + _textContent;
                        }
                    }
                }
            }
            else {
                logica(texto);
            }
        }
    }
    borrar(cero = false) {
        if (cero == true) {
            document.getElementById("display").innerHTML = "0";
        }
        else {
            document.getElementById("display").innerHTML = "";
        }
    }
}
let display = new _display();
function invertir_Cadena(cadena) {
    let contador = 0;
    let cadena_A = cadena;
    let inverti_Text = [];
    let texto_Astring = "";
    function reverse() { inverti_Text = cadena_A.split("").reverse(); cadena_A = ""; }
    ;
    reverse();
    for (const index in inverti_Text) {
        if (contador == 3) {
            cadena_A += ".";
            contador = 0;
        }
        cadena_A += inverti_Text[index];
        contador++;
    }
    inverti_Text = [];
    reverse();
    cadena_A = "";
    cadena_A = inverti_Text.join();
    for (const index in cadena_A) {
        if (!(cadena_A[index] == ",")) {
            texto_Astring += cadena_A[index];
        }
    }
    return texto_Astring;
}
function operacion_Matematica(memoria) {
    let _PositivoNegativo = 0;
    let _numero = "";
    if (!(isNaN(Number(memoria.datos_1)) && isNaN(Number(memoria.datos_1)))) {
        switch (memoria.simbolo) {
            case "*":
                return ((Number(memoria.datos_1) * Number(memoria.datos_2)).toString()).slice(0, 8);
                break;
            case "/":
                return ((Number(memoria.datos_1) / Number(memoria.datos_2)).toString()).slice(0, 8);
                break;
            case "+":
                return ((Number(memoria.datos_1) + Number(memoria.datos_2)).toString()).slice(0, 8);
                break;
            case "-":
                return ((Number(memoria.datos_1) - Number(memoria.datos_2)).toString()).slice(0, 8);
                break;
            case "√":
                return ((Math.sqrt(Number(memoria.datos_1)).toFixed(6)).toString()).slice(0, 8);
                break;
            default:
                return "";
                break;
        }
    }
    else {
        return "";
    }
}
function memoria(_memoria) {
    switch (_memoria.borrarMemoria) {
        case "1":
            memoriaNumero.datos_1 = "";
            break;
        case "2":
            memoriaNumero.datos_2 = "";
            break;
        default:
            _memoria.borrarMemoria = "0";
            break;
    }
    switch (_memoria.tipoMemoriaSave) {
        case "1":
            memoriaNumero.datos_1 = _memoria.datosTexto;
            break;
        case "2":
            memoriaNumero.datos_2 = _memoria.datosTexto;
            break;
        default:
            break;
    }
}
function leyDeSigno(_texto, _resultado, _patronCompleto) {
    if (existenciaOperador(_patronCompleto) == true) {
        let _suma = _texto.includes("+");
        let _resta = _texto.includes("-");
        let _objeto = { _resultadoSigno: "", operadorAdelante: false };
        if ((_suma == true) && (_resta == true)) {
            let _operador_1 = _texto.indexOf("-");
            let _operador_2 = _texto.indexOf("+");
            let _numeroNegativo = _resultado.indexOf("-");
            if (_numeroNegativo == -1) {
                if (_operador_2 >= _operador_1) {
                    _objeto = { _resultadoSigno: "+" + _resultado, operadorAdelante: true };
                    return _objeto;
                }
            }
            else {
                return _objeto;
            }
        }
        else {
            return _objeto;
        }
    }
}
function existenciaOperador(texto) {
    let _textArray = texto.split("");
    let _incontrado;
    let _contador = 0;
    _incontrado = _textArray.map((valor, index) => {
        if (isNaN(Number(valor))) {
            if (valor == ".") {
            }
            else {
                if ((index == 0) && (valor == "-")) {
                }
                else {
                    _contador++;
                }
            }
        }
    });
    if (_contador >= 2) {
        MasOperador = true;
        return true;
    }
    else {
        MasOperador = false;
        return false;
    }
}
function remplazar(texto) {
    let _remplazar = "";
    let _leyDesigno;
    _remplazar = texto._datosTexto.replace(texto._buscarValor, texto._valorRemplazar);
    return _remplazar;
}
function extraerPatronCadena(texto) {
    if (existenciaOperador(texto._texto)) {
        let _isNaN = false;
        let _insertarOperador = false;
        let _datos = { Texto: texto._texto, PatronOperador: "" };
        let _SimboloOperador = texto._operador;
        let _indexOperador = { Simbolo: 0, Inicio: 0, Final: 0 };
        let _separar = { Char: "" };
        let _contador = { Izq: 0, Der: 0, Simbolo: 0 };
        _indexOperador.Simbolo = _datos.Texto.indexOf(_SimboloOperador);
        _contador.Izq = _indexOperador.Simbolo;
        _contador.Der = _indexOperador.Simbolo;
        do {
            _contador.Izq--;
            _separar.Char = _datos.Texto[_contador.Izq];
            _isNaN = isNaN(Number(_separar.Char));
            if (_isNaN) {
                if (_separar.Char == ".") {
                }
                else {
                    if (_separar.Char == "-") {
                        _indexOperador.Inicio = _contador.Izq;
                        _insertarOperador = true;
                    }
                    else {
                        _contador.Izq++;
                        _indexOperador.Inicio = _contador.Izq;
                    }
                    break;
                }
            }
        } while (true);
        do {
            _contador.Der++;
            _separar.Char = _datos.Texto[_contador.Der];
            _isNaN = isNaN(Number(_separar.Char));
            if (_isNaN) {
                if (_separar.Char == ".") {
                }
                else {
                    _indexOperador.Final = _contador.Der;
                    break;
                }
            }
        } while (true);
        _datos.PatronOperador = _datos.Texto.slice(_indexOperador.Inicio, _indexOperador.Final);
        return _datos.PatronOperador;
    }
    else {
        return texto._texto;
    }
}
function separaIzqDer(texto, operador) {
    let _objeto = { numeroIzq: "", numeroDer: "" };
    let _text = texto;
    let _operadorSimbolo = operador;
    let _operador = 0;
    if (_text.charAt(0) == "-") {
        _operador = _text.lastIndexOf(_operadorSimbolo);
    }
    else {
        _operador = _text.indexOf(_operadorSimbolo);
    }
    let _charCadena = "";
    let _longitudFinal = 0;
    let _clonOperador = _operador;
    let _numeroIzq = _text.slice(0, _operador);
    let _numeroDer = "";
    do {
        _clonOperador++;
        _charCadena = _text.charAt(_clonOperador);
        if (isNaN(Number(_charCadena)) || (_charCadena == "")) {
            _numeroDer = _text.substr(_operador + 1, _longitudFinal);
            break;
        }
        else {
            _longitudFinal++;
        }
    } while (true);
    _objeto = { numeroIzq: _numeroIzq, numeroDer: _numeroDer };
    return _objeto;
}
function addClase(id) {
    document.getElementById(id).classList.add("botonPresionado");
}
function addRemover(id) {
    document.getElementById(id).classList.remove("botonPresionado");
}
let btn_1 = document.getElementById("1").addEventListener("click", () => {
    display.imprimir("1");
    addClase("1");
    setTimeout(() => {
        addRemover("1");
    }, 100);
});
let tecla_1 = window.addEventListener("keydown", (event) => {
    if (event.key == "1") {
        display.imprimir("1");
        addClase("1");
        setTimeout(() => {
            addRemover("1");
        }, 100);
    }
    ;
});
let btn_2 = document.getElementById("2").addEventListener("click", () => {
    display.imprimir("2");
    addClase("2");
    setTimeout(() => {
        addRemover("2");
    }, 100);
});
let tecla_2 = window.addEventListener("keydown", (event) => {
    if (event.key == "2") {
        display.imprimir("2");
        addClase("2");
        setTimeout(() => {
            addRemover("2");
        }, 100);
    }
    ;
});
let btn_3 = document.getElementById("3").addEventListener("click", () => {
    display.imprimir("3");
    addClase("3");
    setTimeout(() => {
        addRemover("3");
    }, 100);
});
let tecla_3 = window.addEventListener("keydown", (event) => {
    if (event.key == "3") {
        display.imprimir("3");
        addClase("3");
        setTimeout(() => {
            addRemover("3");
        }, 100);
    }
});
let btn_4 = document.getElementById("4").addEventListener("click", () => {
    display.imprimir("4");
    addClase("4");
    setTimeout(() => {
        addRemover("4");
    }, 100);
});
let tecla_4 = window.addEventListener("keydown", (event) => {
    if (event.key == "4") {
        display.imprimir("4");
        addClase("4");
        setTimeout(() => {
            addRemover("4");
        }, 100);
    }
});
let btn_5 = document.getElementById("5").addEventListener("click", () => {
    display.imprimir("5");
    addClase("5");
    setTimeout(() => {
        addRemover("5");
    }, 100);
});
let tecla_5 = window.addEventListener("keydown", (event) => {
    if (event.key == "5") {
        display.imprimir("5");
        addClase("5");
        setTimeout(() => {
            addRemover("5");
        }, 100);
    }
});
let btn_6 = document.getElementById("6").addEventListener("click", () => {
    display.imprimir("6");
    addClase("6");
    setTimeout(() => {
        addRemover("6");
    }, 100);
});
let tecla_6 = window.addEventListener("keydown", (event) => {
    if (event.key == "6") {
        display.imprimir("6");
        addClase("6");
        setTimeout(() => {
            addRemover("6");
        }, 100);
    }
});
let btn_7 = document.getElementById("7").addEventListener("click", () => {
    display.imprimir("7");
    addClase("7");
    setTimeout(() => {
        addRemover("7");
    }, 100);
});
let tecla_7 = window.addEventListener("keydown", (event) => {
    if (event.key == "7") {
        display.imprimir("7");
        addClase("7");
        setTimeout(() => {
            addRemover("7");
        }, 100);
    }
});
let btn_8 = document.getElementById("8").addEventListener("click", () => {
    display.imprimir("8");
    addClase("8");
    setTimeout(() => {
        addRemover("8");
    }, 100);
});
let tecla_8 = window.addEventListener("keydown", (event) => {
    if (event.key == "8") {
        display.imprimir("8");
        addClase("8");
        setTimeout(() => {
            addRemover("8");
        }, 100);
    }
});
let btn_9 = document.getElementById("9").addEventListener("click", () => {
    display.imprimir("9");
    addClase("9");
    setTimeout(() => {
        addRemover("9");
    }, 100);
});
let tecla_9 = window.addEventListener("keydown", (event) => {
    if (event.key == "9") {
        display.imprimir("9");
        addClase("9");
        setTimeout(() => {
            addRemover("9");
        }, 100);
    }
});
let btn_0 = document.getElementById("0").addEventListener("click", () => {
    display.imprimir("0");
    addClase("0");
    setTimeout(() => {
        addRemover("0");
    }, 100);
});
let tecla_0 = window.addEventListener("keydown", (event) => {
    if (event.key == "0") {
        display.imprimir("0");
        addClase("0");
        setTimeout(() => {
            addRemover("0");
        }, 100);
    }
});
let btn_mult = document.getElementById("por").addEventListener("click", () => {
    display.imprimir("*");
    addClase("por");
    setTimeout(() => {
        addRemover("por");
    }, 100);
});
let tecla_mult = window.addEventListener("keydown", (event) => {
    if (event.key == "*") {
        display.imprimir("*");
        addClase("por");
        setTimeout(() => {
            addRemover("por");
        }, 100);
    }
});
let btn_divi = document.getElementById("dividido").addEventListener("click", () => {
    display.imprimir("/");
    addClase("dividido");
    setTimeout(() => {
        addRemover("dividido");
    }, 100);
});
let tecla_divi = window.addEventListener("keydown", (event) => {
    if (event.key == "/") {
        display.imprimir("/");
        addClase("dividido");
        setTimeout(() => {
            addRemover("dividido");
        }, 100);
    }
});
let btn_suma = document.getElementById("mas").addEventListener("click", () => {
    display.imprimir("+");
    addClase("mas");
    setTimeout(() => {
        addRemover("mas");
    }, 100);
});
let tecla_suma = window.addEventListener("keydown", (event) => {
    if (event.key == "+") {
        display.imprimir("+");
        addClase("mas");
        setTimeout(() => {
            addRemover("mas");
        }, 100);
    }
});
let btn_menos = document.getElementById("menos").addEventListener("click", () => {
    display.imprimir("-");
    addClase("menos");
    setTimeout(() => {
        addRemover("menos");
    }, 100);
});
let tecla_menos = window.addEventListener("keydown", (event) => {
    if (event.key == "-") {
        display.imprimir("-");
        addClase("menos");
        setTimeout(() => {
            addRemover("menos");
        }, 100);
    }
});
let btn_raiz = document.getElementById("raiz").addEventListener("click", () => {
    display.imprimir("√");
    addClase("raiz");
    setTimeout(() => {
        addRemover("raiz");
    }, 100);
});
let btn_igual = document.getElementById("igual").addEventListener("click", () => {
    display.imprimir("=");
    addClase("igual");
    setTimeout(() => {
        addRemover("igual");
    }, 100);
});
let tecla_igual = window.addEventListener("keydown", (event) => {
    if (event.key == "=") {
        display.imprimir("=");
        addClase("igual");
        setTimeout(() => {
            addRemover("igual");
        }, 100);
    }
});
let btn_punto = document.getElementById("punto").addEventListener("click", () => {
    display.imprimir(".");
    addClase("punto");
    setTimeout(() => {
        addRemover("punto");
    }, 100);
});
let tecla_punto = window.addEventListener("keydown", (event) => {
    if (event.key == ".") {
        display.imprimir(".");
        addClase("punto");
        setTimeout(() => {
            addRemover("punto");
        }, 100);
    }
});
let btn_Backspace = document.getElementById("on").addEventListener("click", () => {
    display.imprimir("on");
    addClase("on");
    setTimeout(() => {
        addRemover("on");
    }, 100);
});
let tecla_Backspace = window.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
        display.imprimir("on");
        addClase("on");
        setTimeout(() => {
            addRemover("on");
        }, 100);
    }
});
let btn_ = document.getElementById("sign").addEventListener("click", () => {
    display.imprimir("+/-");
    addClase("sign");
    setTimeout(() => {
        addRemover("sign");
    }, 100);
});
function logica(operador) {
    let displayCero = true;
    let _interacion = 0;
    let _operadorSimbolo = "";
    let _datosMemoria = "";
    let _resultado = "";
    let _remplazar = "";
    let _PatronCadena;
    let _leyDeSigno;
    let _separar;
    let _display = display.leerTexto();
    let _index = { izq: 0, der: 0 };
    if ((_display != "0")) {
        if (_display != "") {
            if (operador == "=") {
                signo = true;
            }
            if (operador == "√") {
                _datosMemoria = memoriaNumero.GuarDatos += operacion_Matematica({ datos_1: display.leerTexto(), datos_2: "", simbolo: operador });
                display.borrar();
                display.imprimir(_datosMemoria);
                simbolo.raiz = true;
            }
            else {
                if ((operador == "*") || (operador == "/") || (operador == "+") || (operador == "-")) {
                    signo = false;
                    if (simbolo.raiz == true) {
                        display.borrar();
                        memoriaNumero.GuarDatos += operador;
                        simbolo.raiz = false;
                    }
                    else {
                        memoriaNumero.GuarDatos += display.leerTexto() + operador;
                        display.borrar();
                    }
                    puntoUnaVez = true;
                    switch (operador) {
                        case "*":
                            contador.multiplicacion++;
                            break;
                        case "/":
                            contador.division++;
                            break;
                        case "+":
                            contador.suma++;
                            break;
                        case "-":
                            contador.resta++;
                            break;
                        default:
                            break;
                    }
                }
                else if ((operador == "=")) {
                    _datosMemoria = memoriaNumero.GuarDatos += display.leerTexto();
                    do {
                        if (contador.multiplicacion >= 1) {
                            _operadorSimbolo = "*";
                            _interacion = contador.multiplicacion;
                        }
                        else if (contador.division >= 1) {
                            _operadorSimbolo = "/";
                            _interacion = contador.division;
                        }
                        else if (contador.suma >= 1) {
                            _operadorSimbolo = "+";
                            _interacion = contador.suma;
                        }
                        else if (contador.resta >= 1) {
                            _operadorSimbolo = "-";
                            _interacion = contador.resta;
                        }
                        if ((contador.multiplicacion == 0) && (contador.division == 0) && (contador.suma == 0) && (contador.resta == 0)) {
                            break;
                        }
                        for (let index = 0; index < _interacion; index++) {
                            _PatronCadena = extraerPatronCadena({ _texto: _datosMemoria, _operador: _operadorSimbolo });
                            _separar = separaIzqDer(_PatronCadena, _operadorSimbolo);
                            _resultado = operacion_Matematica({ datos_1: _separar.numeroIzq, datos_2: _separar.numeroDer, simbolo: _operadorSimbolo });
                            _leyDeSigno = leyDeSigno(_PatronCadena, _resultado, _datosMemoria);
                            if (MasOperador == true) {
                                if (_leyDeSigno._resultadoSigno !== "") {
                                    _resultado = _leyDeSigno._resultadoSigno;
                                    if ((_interacion <= 1) && (_operadorSimbolo == "-")) {
                                    }
                                    _interacion++;
                                    contador.resta--;
                                    _operadorSimbolo = "+";
                                }
                            }
                            _datosMemoria = remplazar({ _datosTexto: _datosMemoria, _buscarValor: _PatronCadena, _valorRemplazar: _resultado });
                        }
                        switch (_operadorSimbolo) {
                            case "*":
                                contador.multiplicacion = 0;
                                break;
                            case "/":
                                contador.division = 0;
                                break;
                            case "+":
                                contador.suma = 0;
                                break;
                            case "-":
                                contador.resta = 0;
                                break;
                            default:
                                break;
                        }
                    } while (true);
                    display.borrar();
                    memoriaNumero.GuarDatos = "";
                    display.imprimir(_datosMemoria);
                }
                else if (operador == "on") {
                    puntoUnaVez = true;
                    signo = false;
                    if (displayCero == true) {
                        display.borrar(true);
                        memoriaNumero.GuarDatos = "";
                    }
                    else {
                        display.borrar();
                    }
                    memoriaNumero.GuarDatos = "";
                }
            }
        }
    }
}
