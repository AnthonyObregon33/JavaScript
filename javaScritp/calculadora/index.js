function sumar()
{
    var nuemero1=parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = nuemero1 + numero2;

    document.getElementById('resultado').value = resultado;
}