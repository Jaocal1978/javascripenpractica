let btnRestar = document.querySelector('#btn-restar');
btnRestar.addEventListener('click', (event) =>
{
    event.preventDefault();

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if(valor1 == "" || valor2 == "")
    {
        Swal.fire("Error", "Ingrese Valor 1 y Valor 2 por favor.", "error");
    }
    else
    {
        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);
        document.querySelector('.resultado').innerHTML = resta(valor1,valor2);
        limpiar();
    }
})

let btnSumar = document.querySelector('#btn-sumar');
btnSumar.addEventListener('click', (event) =>
{
    event.preventDefault();

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if(valor1 == "" || valor2 == "")
    {
        Swal.fire("Error", "Ingrese Valor 1 y Valor 2 por favor.", "error");
    }
    else
    {
        if(numeros(valor1) == true && numeros(valor2) == true)
        {
            valor1 = parseInt(valor1);
            valor2 = parseInt(valor2);
            document.querySelector('.resultado').innerHTML = suma(valor1,valor2);
            limpiar();
        }
        else
        {
            Swal.fire("Error", "Los Campos solo reciben numeros, ingrese numeros.", "error");
            limpiar();
        }
    }
        
})


let resta = (n1, n2) =>
{
    let resultado = parseInt(n1 - n2);
    if(resultado < 0)
    {
        resultado = 0;
    }
    return new Intl.NumberFormat("es-cl").format(resultado);;
}

let suma = (n1, n2) =>
{
    let resultado = n1 + n2;
    if(resultado < 0)
    {
        resultado = 0;
    }
    return new Intl.NumberFormat("es-cl").format(resultado);
}

let limpiar = () =>
{
    let valor1 = document.getElementById('valor1').value = "";
    let valor2 = document.getElementById('valor2').value = "";
}

let numeros = (n) =>
{
    let validar = /^[0-9]+$/;
    let campo = validar.test(n);
    return campo;
}