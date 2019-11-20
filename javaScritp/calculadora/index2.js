function suma()
{
    var numero1, numero2;
    numero1 = parseFloat(document.getElementById('numero1').value );
    numero2 = parseFloat(document.getElementById('numero2').value );
    var resultado = numero1 + numero2; 

    document.getElementById('resultado').value = resultado;
}