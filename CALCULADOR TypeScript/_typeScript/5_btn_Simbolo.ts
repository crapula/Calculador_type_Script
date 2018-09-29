
//TODO:  SIMBOLO DE LA CALCULADORA 

// BTN_*
let btn_mult: any = document.getElementById("por")!.addEventListener("click", () => {
    display.imprimir("*");
    //____________
    addClase("por");
    //____________
    setTimeout(() => {
        addRemover("por");
    }, 100);
    //____________
});

// TECLA_*
let tecla_mult: any = window.addEventListener("keydown", (event) => {
    if (event.key == "*") {
        display.imprimir("*");
        //____________
        addClase("por");
        //____________
        setTimeout(() => {
            addRemover("por");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_/
let btn_divi: any = document.getElementById("dividido")!.addEventListener("click", () => {
    display.imprimir("/")
    //____________
    addClase("dividido");
    //____________
    setTimeout(() => {
        addRemover("dividido");
    }, 100);
    //____________
});

// TECLA_/
let tecla_divi: any = window.addEventListener("keydown", (event) => {
    if (event.key == "/") {
        display.imprimir("/");
        //____________
        addClase("dividido");
        //____________
        setTimeout(() => {
            addRemover("dividido");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_+
let btn_suma: any = document.getElementById("mas")!.addEventListener("click", () => {
    display.imprimir("+")
    //____________
    addClase("mas");
    //____________
    setTimeout(() => {
        addRemover("mas");
    }, 100);
    //____________
});

// TECLA_+
let tecla_suma: any = window.addEventListener("keydown", (event) => {
    if (event.key == "+") {
        display.imprimir("+");
        //____________
        addClase("mas");
        //____________
        setTimeout(() => {
            addRemover("mas");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_-
let btn_menos: any = document.getElementById("menos")!.addEventListener("click", () => {
    display.imprimir("-")
    //____________
    addClase("menos");
    //____________
    setTimeout(() => {
        addRemover("menos");
    }, 100);
    //____________
});

// TECLA_-
let tecla_menos: any = window.addEventListener("keydown", (event) => {
    if (event.key == "-") {
        display.imprimir("-")
        //____________
        addClase("menos");
        //____________
        setTimeout(() => {
            addRemover("menos");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_√
let btn_raiz: any = document.getElementById("raiz")!.addEventListener("click", () => {
    display.imprimir("√");
    //____________
    addClase("raiz");
    //____________
    setTimeout(() => {
        addRemover("raiz");
    }, 100);
    //____________

});


//--------------------------------------------------------------------------------//


// BTN_=
let btn_igual: any = document.getElementById("igual")!.addEventListener("click", () => {
    display.imprimir("=")
    //____________
    addClase("igual");
    //____________
    setTimeout(() => {
        addRemover("igual");
    }, 100);
    //____________

});

// TECLA_=
let tecla_igual: any = window.addEventListener("keydown", (event) => {
    if (event.key == "=") {
        display.imprimir("=");
        //____________
        addClase("igual");
        //____________
        setTimeout(() => {
            addRemover("igual");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_.
let btn_punto: any = document.getElementById("punto")!.addEventListener("click", () => {
    display.imprimir(".");
    //____________
    addClase("punto");
    //____________
    setTimeout(() => {
        addRemover("punto");
    }, 100);
    //____________
});

// TECLA_.
let tecla_punto: any = window.addEventListener("keydown", (event) => {
    if (event.key == ".") {
        display.imprimir(".");
        //____________
        addClase("punto");
        //____________
        setTimeout(() => {
            addRemover("punto");
        }, 100);
        //____________
    }
});

//--------------------------------------------------------------------------------//


// BTN_ON
let btn_Backspace: any = document.getElementById("on")!.addEventListener("click", () => {
    display.imprimir("on");
    //____________
    addClase("on");
    //____________
    setTimeout(() => {
        addRemover("on");
    }, 100);
    //____________
});

// TECLA_ON
let tecla_Backspace: any = window.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
        display.imprimir("on");
        //____________
        addClase("on");
        //____________
        setTimeout(() => {
            addRemover("on");
        }, 100);
        //____________
    }

});

//--------------------------------------------------------------------------------//


// BTN_+/- 
let btn_: any = document.getElementById("sign")!.addEventListener("click", () => {
    display.imprimir("+/-");
    //____________
    addClase("sign");
    //____________
    setTimeout(() => {
        addRemover("sign");
    }, 100);
    //____________
});


//--------------------------------------------------------------------------------//