let formulario = document.getElementById("formulario-contato")


function chameoformulario(){
    formulario.className="mostrar-formulario"
}

let refresh = document.querySelector("#refresh");

refresh.addEventListener("click", function() {
    
    location.reload();

});

