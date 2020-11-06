class Api {

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    listarDatos() {
        let url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`
        fetch(url, {
                method: "GET",
            })
            .then(response => response.json())
            .then(function resite(res) {
                let seleccionar = document.getElementById("criptomoneda");
                for (let [key, value] of Object.entries(res.Data)) {
                    let opciones = document.createElement("option");
                    opciones.value = value.Symbol;
                    opciones.appendChild(document.createTextNode(value.CoinName))

                    seleccionar.appendChild(opciones)
                }
            })
            .catch(error => console.log(error))
    }

    mostrarDatos(selectMoneda, selectCripto) {
        let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectCripto}&tsyms=${selectMoneda}&api_key=${this.apiKey}`;


        fetch(url, {

                method: "GET",
            })
            .then(response => response.json())
            .then(function resite(res) {

                let HTMLTemplate = "";
                for (let [key, value] of Object.entries(res.RAW)) {
                    let ver = value;
                    for (let [key, value] of Object.entries(ver)) {
                        let precio = (value.PRICE).toFixed(2)
                        let porcentaje = (value.CHANGEPCTDAY).toFixed(2)
                        let actualizacion = new Date(value.LASTUPDATE * 1000).toLocaleDateString(`es-CO`)

                        HTMLTemplate += ` <h2>RESULTADO</h2>
                        <p>el precio del ${value.FROMSYMBOL} a moneda ${value.TOSYMBOL} es de: ${precio}</p>
                      
                        <p>variacion de ultimo dia: %${porcentaje}</p>

                        <p>ultima actualizacion: ${actualizacion}</p>
                        `
                        let resultado = document.getElementById("resultado");
                        resultado.classList.add("info")
                        resultado.style.borderRadius = "5px"
                        resultado.style.color = "white"
                        resultado.appendChild = HTMLTemplate
                        resultado.innerHTML = HTMLTemplate


                    }


                }

            })
            .catch(error => console.log(error))

    }



}