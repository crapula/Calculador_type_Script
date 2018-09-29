
//TODO:>>>>>>>>>>>>>>>>>>>>> DISPLAY OK <<<<<<<<<<<<<<<<<<<<

class _display {

    //>>>>>>>>>>>>>>>>>>>>> IMPRIMIR EN DISPLAY OK <<<<<<<<<<<<<<<<<<<<
    public imprimir(texto: string, punto: boolean = false): void {
         
        //save logitud 
        let _textoLogitud: number;
        let _textContent: any;
        let _bucarSigno: string = "";
        let _signoNegativoText: string;
        //VERIFICA SI ES UN NUMERO
        if (!(isNaN(Number(texto))) || (texto == ".")) {
            //logitud del display texto
            _textoLogitud = document.getElementById("display")!.textContent!.length;
            //comprobra que sea menos de 7 caracteres en display
            if (_textoLogitud <= 7) {
                //PUNTO SOLO UNA VEZ
                if (texto == ".") {
                    if (puntoUnaVez == true) {
                        puntoUnaVez = false;
                        document.getElementById("display")!.innerHTML += texto;
                    }
                }
                else {
                    _textContent = document.getElementById("display")!.textContent;
                    if (_textContent == "0") {
                        document.getElementById("display")!.innerHTML = "";
                    }
                    document.getElementById("display")!.innerHTML += texto;
                    //EN FOCA LA PANTA POR QUE ESTA IMPIMIENDO
                    pantalla.foco = true;
                }
            }
        }
        else {
            if ((texto == "+/-")) {

                if (signo == true) {

                    //-123
                    _textContent = document.getElementById("display")!.textContent!;
                    if (_textContent !== "0") {

                        _bucarSigno = _textContent.charAt(0);
                        _textoLogitud = _textContent.length;

                        //_________________________________
                        _textContent = _textContent = document.getElementById("display")!.textContent!;

                        if (_bucarSigno == "-") {
                            document.getElementById("display")!.innerHTML = _textContent.substr(1, _textoLogitud)
                        }
                        else {
                            document.getElementById("display")!.innerHTML = "-" + _textContent;
                        }
                    }
                }



            } else {
                logica(texto);
            }
        }

    }

    //>>>>>>>>>>>>>>>>>>>>> BORRAR EL DISPLAY OK <<<<<<<<<<<<<<<<<<<<
    public borrar(cero: boolean = false): void {

        if (cero == true) {
            document.getElementById("display")!.innerHTML = "0";
        } else {
            document.getElementById("display")!.innerHTML = "";
        }


    }
    //>>>>>>>>>>>>>>>>>>>>> LEER EL TEXTO EN EL DISPLAY OK <<<<<<<<<<<<<<<<<<<<
    public leerTexto = () => document.getElementById("display")!.textContent;


}

let display: _display = new _display();

