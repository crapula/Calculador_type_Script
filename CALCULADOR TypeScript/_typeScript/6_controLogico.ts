
//>>>>>>>>>>>>>>>>>>>>> DESENCADENA FUNCIONES AL DISPLAY <<<<<<<<<<<<<<<<<<<<

//TODO: OPERADOR Y SIMBOLO

function logica(operador: string) {

    //__________________________________________________________
    let displayCero: boolean = true;
    let _interacion: number = 0;
    //__________________________________________________________
    let _operadorSimbolo: string = "";
    let _datosMemoria: string = "";
    let _resultado: string = "";
    let _remplazar: string = "";
    let _PatronCadena: any;
    let _leyDeSigno: any;
    let _separar;
    let _display: string = display.leerTexto()!;
    //__________________________________________________________
    let _index = { izq: 0, der: 0 };

    //__________________________________________________________
    if ((_display != "0")) {
        if (_display != "") {

            if (operador == "=") {
                signo = true;
               
            }


            if (operador == "√") {
                _datosMemoria = memoriaNumero.GuarDatos += operacion_Matematica({ datos_1: display.leerTexto()!, datos_2: "", simbolo: operador })
                display.borrar();
                display.imprimir(_datosMemoria);
                simbolo.raiz = true;
            } else {

                //__________________________________________________________
                //OPERADORES ARITMETICOS
                if ((operador == "*") || (operador == "/") || (operador == "+") || (operador == "-")) {
                    signo = false;
                    if (simbolo.raiz == true) {
                        display.borrar();
                        memoriaNumero.GuarDatos += operador;
                        simbolo.raiz = false;
                    } else {

                        memoriaNumero.GuarDatos += display.leerTexto() + operador;
                        display.borrar();
                    }
                    puntoUnaVez = true;
                    //____________________________________________
                    //  memoriaNumero.Longitud=memoriaNumero.GuarDatos.length() ;
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

                //__________________________________________________________
                //IGUAL EJECUTAR OPERACIONES MATEMATICAS

                else if ((operador == "=")) {
                    //_______________________________
                    _datosMemoria = memoriaNumero.GuarDatos += display.leerTexto();

                    //_______________________________
                    do {

                        //_______________________________
                        if (contador.multiplicacion >= 1) {
                            _operadorSimbolo = "*";
                            _interacion = contador.multiplicacion;
                        }
                        //_______________________________
                        else if (contador.division >= 1) {
                            _operadorSimbolo = "/";
                            _interacion = contador.division;
                        }
                        //_______________________________
                        else if (contador.suma >= 1) {
                            _operadorSimbolo = "+";
                            _interacion = contador.suma;
                        }
                        //_______________________________
                        else if (contador.resta >= 1) {
                            _operadorSimbolo = "-";
                            _interacion = contador.resta;
                        }
                        //_______________________________
                        if ((contador.multiplicacion == 0) && (contador.division == 0) && (contador.suma == 0) && (contador.resta == 0)) {
                            break;
                        }
                        //_______________________________
                        for (let index = 0; index < _interacion; index++) {

                            _PatronCadena = extraerPatronCadena({ _texto: _datosMemoria, _operador: _operadorSimbolo });
                            _separar = separaIzqDer(_PatronCadena, _operadorSimbolo);
                            _resultado = operacion_Matematica({ datos_1: _separar.numeroIzq, datos_2: _separar.numeroDer, simbolo: _operadorSimbolo })

                            _leyDeSigno = leyDeSigno(_PatronCadena, _resultado, _datosMemoria);

                            if (MasOperador == true) {

                                if (_leyDeSigno!._resultadoSigno !== "") {
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
                        //_______________________________
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
                        //_______________________________
                    } while (true);

                    //_______________________________
                    display.borrar();

                    //_______________________________
                    memoriaNumero.GuarDatos = "";
                    display.imprimir(_datosMemoria);
                    //limpiarDisplay = true;

                }
                //__________________________________________________________
                //BORRA EL DISPLAY
                else if (operador == "on") {
                    puntoUnaVez = true;
                    signo = false;
                    //IMPRIMIR CER EN DISPLAY       
                    if (displayCero == true) {
                        display.borrar(true);
                        memoriaNumero.GuarDatos = "";
                    }

                    //LIMPIAR DISPLAY} 
                    else {
                        display.borrar();
                    }
                    memoriaNumero.GuarDatos = "";
                }

            } //__________________________________________________________
        }
    }
} 