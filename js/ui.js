class Interfaz {


    mostrarMensaje() {
        let mensaje = document.querySelector(".mensajes");
        let div = document.createElement("div")
        div.classList.add("alert");
        div.style.textAlign = "center"
        mensaje.appendChild(div);
        div.innerText = "Rellenar los campos vacios!!!"
        setTimeout(function() {
            document.querySelector(".alert").remove();
        }, 3000);

    }

    eliminarElemento() {
        let resultadoAnterior = document.getElementById('resultado');
        if (resultadoAnterior) {
            resultadoAnterior.innerHTML = "";
            resultadoAnterior.classList.remove("info")

        }
    }
}