let UI = new Interfaz();
let API = new Api("64da6f43cec05cabdc10c164e190e310286ebe42c0598b0ed639817135a61d25");

API.listarDatos();

let form = document.querySelector("#formulario")
let estilo = document.querySelector(".contenido-spinner")

form.addEventListener("submit", cotizarCrito);


function cotizarCrito(e) {
    e.preventDefault();


    let moneda = document.querySelector("#moneda");
    let selectMoneda = moneda.options[moneda.selectedIndex].value;

    let criptoMoneda = document.querySelector("#criptomoneda")
    let selectCripto = criptoMoneda.options[criptoMoneda.selectedIndex].value

    if (selectMoneda == "" || selectCripto == "") {

        UI.mostrarMensaje();

    } else {
        UI.eliminarElemento();
        estilo.style.display = "block"
        setTimeout(function() {
            estilo.style.display = "none"
            API.mostrarDatos(selectMoneda, selectCripto);
        }, 3000);

    }

}