function Sumar() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;

    var multiplicacion = parseFloat(n1) * parseFloat(n2) * parseFloat(n3);
    alert("El total es: "+multiplicacion)
}