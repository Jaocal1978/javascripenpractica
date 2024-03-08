let formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => 
{
    event.preventDefault();

    let nombre = document.querySelector('#nombre').value;
    let asunto = document.querySelector('#asunto').value;
    let mensaje = document.querySelector('#mensaje').value;
    let errorNombre = document.querySelector('.errorNombre');
    let errorAsunto = document.querySelector('.errorAsunto');
    let errorMensaje = document.querySelector('.errorMensaje');
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = "";
    
    if(nombre == "" || asunto == "" || mensaje == "")
    {
        Swal.fire("Error", "Debe ingresa los campos Nombre - Asunto - Mensaje", "error");
        resultado.innerHTML = "";
        return false;
    }

    errorNombre.innerHTML = validarCampo(nombre);
    errorAsunto.innerHTML = validarCampo(asunto);
    errorMensaje.innerHTML = validarCampo(mensaje);

    if(validarCampo(nombre) == "" && validarCampo(asunto) == "" && validarCampo(mensaje) == "")
    {
        resultado.innerHTML = "Mensaje Enviado con Exito!!!";
        formulario.reset();
    }
    else
    {
        resultado.innerHTML = "";
    }

})

function validarCampo(campo)
{
    valida = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    
    let campoValido = valida.test(campo);

    if(campoValido != true)
    {
        campoValido = "¡Error! El campo es requerido solo con letras de la A-Z.";
    }
    else 
    {
        campoValido = "";
    }
    return campoValido;
}